import styled from "styled-components";
import { FlexBox } from "../../atoms/Flex";
import { BaseButton, TransparentBtn } from "../../atoms/Buttons";
import NavBar from "../layout/Header/components/Navbar/NavBar";
import Modal from "../../atoms/Modal";

// s -small modal, m -biggerModal
const MenuModal = ({
  onClose,
  pathname,
  handleLogOut,
}: {
  onClose?: () => void;
  pathname?: string;
  handleLogOut?: () => void;
}) => {
  return (
    <Modal.Backdrop>
      <MenuBody $align="center" $justify="space-between">
        <FlexBox $align="end">
          <CloseBtn onClick={onClose}>X</CloseBtn>
        </FlexBox>
        <FlexBox style={{ paddingLeft: "50px" }}>
          <NavBar direction="column" pathname={pathname} />
        </FlexBox>

        <TransparentBtn onClick={handleLogOut}>Log out</TransparentBtn>
      </MenuBody>
    </Modal.Backdrop>
  );
};

const CloseBtn = styled(BaseButton)`
  width: 28px;
  height: 28px;
  font-size: 28px;
`;

const MenuBody = styled(FlexBox)`
  position: absolute;
  top: 0;
  height: 100%;
  right: 0px;

  max-width: 200px;
  background-color: ${(p) => p.theme.background.secondary};
  color: ${(p) => p.theme.text.main};
  opacity: 1;

  padding: 34px 20px 40px;
`;

export default MenuModal;
