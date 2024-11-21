import styled, { css } from "styled-components";
import { FlexBox } from "../../atoms/Flex";
import { BaseButton, TransparentBtn } from "../../atoms/Buttons";
import NavBar from "../layout/Header/components/Navbar/NavBar";
import CloseIcon from "../../assets/CloseIcon";
import { useLocation } from "react-router-dom";
import { slideInFromRight, slideOutToRight } from "../../theme/animations";

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

const CloseBtn = styled(BaseButton)`
  width: 28px;
  height: 28px;
  font-size: 28px;
`;

const MenuBody = styled(FlexBox)<{ $isExiting?: boolean }>`
  position: absolute;
  top: 0;
  height: 100%;
  right: 0px;
  z-index: 201;
  max-width: 200px;
  background-color: ${(p) => p.theme.background.secondary};
  color: ${(p) => p.theme.text.main};
  opacity: 1;

  padding: 34px 20px 40px;

  ${({ $isExiting, theme }) =>
    $isExiting
      ? css`
          animation: ${slideOutToRight} ${theme.timingFnMain};
        `
      : css`
          animation: ${slideInFromRight} ${theme.timingFnMain};
        `}
`;

export default MenuModal;
