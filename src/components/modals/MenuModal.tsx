import { FlexBox } from "../../atoms/Flex";
import { TransparentBtn } from "../../atoms/Buttons";
import NavBar from "../layout/Header/components/Navbar/NavBar";
import CloseIcon from "../../assets/CloseIcon";
import { useLocation } from "react-router-dom";
import { CloseBtn, MenuBody } from "./base/Modals.styled";

const MenuModal = ({
  onClose,
  isExiting,
  handleLogOut,
}: {
  onClose?: () => void;
  isExiting?: boolean;
  handleLogOut?: () => void;
}) => {
  const { pathname } = useLocation();

  return (
    <MenuBody $align="center" $justify="space-between" $isExiting={isExiting}>
      <FlexBox $align="end">
        <CloseBtn
          onClick={() => {
            onClose?.();
          }}
        >
          <CloseIcon />
        </CloseBtn>
      </FlexBox>
      <FlexBox style={{ paddingLeft: "50px" }}>
        <NavBar direction="column" pathname={pathname} />
      </FlexBox>

      <TransparentBtn onClick={handleLogOut}>Log out</TransparentBtn>
    </MenuBody>
  );
};

export default MenuModal;
