import styled from "styled-components";
import { FlexBox } from "./FlexBox";

export const BaseBox = styled(FlexBox)<{ $padding?: string }>`
  background-color: ${(p) => p.theme.background.secondary};
  border-radius: ${(p) => p.theme.borderRadius.main};

  width: 100%;
  padding: ${(p) => (p.$padding ? p.$padding : "20px")};
`;
