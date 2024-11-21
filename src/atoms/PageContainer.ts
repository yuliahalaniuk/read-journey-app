import { screen } from "@testing-library/react";
import styled from "styled-components";
import { FlexBox } from "./Flex";

export const Container = styled(FlexBox)`
  padding: 20px 20px 40px;
  gap: 10px;
`;

export const ContentContainer = styled(FlexBox)`
  max-width: 375px;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 100%;
  }
`;
