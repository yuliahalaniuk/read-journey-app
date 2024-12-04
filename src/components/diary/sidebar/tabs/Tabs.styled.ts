import styled from "styled-components";
import { SecondaryBaseBox } from "../../../../atoms/BaseBox";
import { FlexBox } from "../../../../atoms/FlexBox";

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

export const GraphIndicator = styled(FlexBox)`
  width: 14px;
  height: 14px;
  background-color: #30b94d;
  border-radius: 4px;
  flex-shrink: 0;
  margin-top: 2px;
`;