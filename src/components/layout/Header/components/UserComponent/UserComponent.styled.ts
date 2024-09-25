import styled from "styled-components";
import { FlexBox } from "../../../../../atoms/Flex";

export const AvatarBox = styled(FlexBox)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: ${(p) => p.theme.background.light};
  border: 1px solid ${(p) => p.theme.border.button};
  align-items: center;
  justify-content: center;

  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 112%;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.text.main};
  }
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 112%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.text.main};
`;
