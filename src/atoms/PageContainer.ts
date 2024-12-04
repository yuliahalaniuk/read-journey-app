import styled from "styled-components";
import { FlexBox } from "./FlexBox";

export const Container = styled(FlexBox)`
  padding: 20px 20px 40px;
  gap: 10px;
`;

export const ContentContainer = styled(FlexBox)`
  max-width: 375px;
  width: 100%;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    max-width: 704px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    max-width: 100%;
  }
`;
