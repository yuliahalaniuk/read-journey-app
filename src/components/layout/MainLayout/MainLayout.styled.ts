import { FlexBox } from "../../../atoms/Flex";
import styled from "styled-components";

export const Container = styled(FlexBox)`
  min-height: 100vh;
  position: relative;
  padding: 0 20px 20px;
`;

export const Content = styled(FlexBox)`
  overflow: hidden;
  min-height: 100%;
  flex: 1;
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
  max-width: 375px;
  width: 100%;
  gap: 16px;

  @media screen and (min-width: 768px) {
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    max-width: 100%;
  }

  @media screen and (min-width: 1280px) {
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr;
    align-items: stretch;
  }
`;
