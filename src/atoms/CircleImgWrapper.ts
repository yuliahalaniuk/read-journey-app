import styled from "styled-components";
import { FlexBox } from "./Flex";

export const CircleImgWrapper = styled(FlexBox)<{ $size?: string }>`
  width: ${(p) => (p.$size ? p.$size : "130px")};
  height: ${(p) => (p.$size ? p.$size : "130px")};
  border-radius: 50%;
  background-color: ${(p) => p.theme.background.light};
  align-items: center;
  justify-content: center;
`;
