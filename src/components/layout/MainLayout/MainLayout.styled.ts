import { FlexBox } from "../../../atoms/Flex";
import styled from "styled-components";

export const Container = styled(FlexBox)`
  position: relative;
  padding: 20px 20px 40px;
  gap: 16px;
`;

export const Content = styled(FlexBox)`
  /* position: relative; */
  gap: 16px;

  overflow: hidden;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
