import { FlexBox } from "../../atoms/FlexBox";
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
      <FlexBox $align="end" $fillWidth>
        <CloseBtn
          onClick={() => {
            onClose?.();
          }}
        >
          <CloseIcon />
        </CloseBtn>
      </FlexBox>
      <FlexBox $padding={"0 0 0 20px"}>
        <NavBar direction="column" pathname={pathname} onLinkClick={onClose} />
      </FlexBox>

      <TransparentBtn onClick={handleLogOut}>Log out</TransparentBtn>
    </MenuBody>
  );
};

export default MenuModal;
