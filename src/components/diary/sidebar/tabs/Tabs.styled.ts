import styled from "styled-components";
import { SecondaryBaseBox } from "../../../../atoms/BaseBox";

export const DiaryTabContainer = styled(SecondaryBaseBox)`
  max-height: 211px;
  overflow: auto;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    max-height: 292px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    max-height: 373px;
  }
`;
