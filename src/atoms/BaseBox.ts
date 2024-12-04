import styled from "styled-components";
import { FlexBox, Section } from "./FlexBox";

export const BaseBox = styled(FlexBox)`
  background-color: ${(p) => p.theme.background.secondary};
  border-radius: ${(p) => p.theme.borderRadius.main};
  width: 100%;
  padding: ${(p) => (p.$padding ? p.$padding : "20px")};
`;

export const SecondaryBaseBox = styled(FlexBox)`
  background-color: ${(p) => p.theme.background.light};
  border-radius: ${(p) => p.theme.borderRadius.input};

  width: 100%;
  padding: ${(p) => (p.$padding ? p.$padding : "20px")};
`;

export const SectionBox = styled(Section)`
  background-color: ${(p) => p.theme.background.secondary};
  border-radius: ${(p) => p.theme.borderRadius.main};

  width: 100%;
  padding-block: 40px;
  padding-inline: 20px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding-inline: 40px;
  }
`;