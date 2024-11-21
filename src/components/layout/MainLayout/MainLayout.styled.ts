import { FlexBox } from "../../../atoms/Flex";
import styled from "styled-components";

export const Container = styled(FlexBox)`
  position: relative;
  padding: 0 20px 20px;
`;

export const Content = styled(FlexBox)`
  /* position: relative; */
  overflow: hidden;

  display: grid;
  grid-template-rows: auto auto;
  /* grid-template-columns: 375px; */
  justify-content: center;
  max-width: 375px;
  width: 100%;
  gap: 16px;

  @media screen and (min-width: 768px) {
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    max-width: 704px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 100%;
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr;
    align-items: flex-start;
  }
`;
