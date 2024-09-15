import styled from "styled-components";
import { FlexBox } from "./Flex";

export const BaseBox = styled(FlexBox)<{ $padding?: string }>`
  background-color: ${(p) => p.theme.background.secondary};
  border-radius: ${(p) => p.theme.borderRadius.main};

  width: 100%;
  padding: ${(p) => (p.$padding ? p.$padding : "20px")};
`;

export const SecondaryBaseBox = styled(FlexBox)<{ $padding?: string }>`
  background-color: ${(p) => p.theme.background.light};
  border-radius: ${(p) => p.theme.borderRadius.input};

  width: 100%;
  padding: ${(p) => (p.$padding ? p.$padding : "20px")};
`;