/// <reference types="react/canary" />
import { BaseButton, TransparentBtn } from "../../../atoms/Buttons";
import { FlexBox } from "../../../atoms/FlexBox";
import { useMediaQuery } from "react-responsive";
import UserComponent from "./components/UserComponent/UserComponent";
import NavBar from "./components/Navbar/NavBar";
import { Box, HeaderSt } from "./Header.styled";
import MenuIcon from "../../../assets/MenuIcon";
import { isDesktopQuery } from "../../../utils/mediaQueries";
import { useModal } from "../../../providers/ModalProvider";
import MenuModal from "../../modals/MenuModal";
import { useLocation } from "react-router-dom";
import { logOutThunk } from "../../../redux/auth/auth.thunks";
import { useAppDispatch } from "../../../redux/store";
import useScrollUp from "../../../hooks/useScrollUp";

const Header = () => {
  const { showModal, hideModal, isExiting } = useModal();
  const isDesktop = useMediaQuery(isDesktopQuery);
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { isScrollingUp } = useScrollUp();

  const handleLogOut = () => {
    dispatch(logOutThunk({ args: {} }));
  };

  const handleMenuClick = () => {
    showModal(
      <MenuModal
        onClose={hideModal}
        handleLogOut={handleLogOut}
        isExiting={isExiting}
      />,
      {
        isDrawer: true,
      }
    );
  };

  return (
    <Box $isVisible={isMobile ? true : isScrollingUp}>
      <HeaderSt $fDirection="row" $justify="space-between">
        <FlexBox $align="start" $justify="center">
          <img
            src={isDesktop ? "/images/logo.png" : "/images/logoSmall.png"}
            alt={"Logo"}
            width={isDesktop ? 182 : 42}
            height={17}
          />
        </FlexBox>

        {!isMobile && <NavBar pathname={pathname} />}

        <FlexBox $fDirection="row" $gap="16px" $justify="end" $align="center">
          <UserComponent />

          {isMobile ? (
            <BaseButton onClick={handleMenuClick}>
              <MenuIcon />
            </BaseButton>
          ) : (
            <TransparentBtn onClick={handleLogOut}>Log out</TransparentBtn>
          )}
        </FlexBox>
      </HeaderSt>
    </Box>
  );
};

export default Header;
