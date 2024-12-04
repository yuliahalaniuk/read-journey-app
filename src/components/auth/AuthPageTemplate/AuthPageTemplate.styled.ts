import styled from "styled-components";
import { BaseBox } from "../../../atoms/BaseBox";
import { FlexBox } from "../../../atoms/Flex";

export const Title = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.text.main};
  margin-bottom: 20px;

  span {
    color: ${(p) => p.theme.text.lightTransparent};
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    max-width: 472px;
    font-size: 64px;
    line-height: 94%;
    margin-bottom: 40px;
  }
`;

export const ImgContainer = styled(FlexBox)`
  margin-bottom: 40px;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, minmax(50vh, 1fr));
  gap: 10px;
  padding: 20px;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  min-height: 100vh;
  overflow: auto;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    grid-template-rows: repeat(2, minmax(50vh, 1fr));

    max-width: 768px;
    padding: 32px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    max-width: 1200px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 16px;
  }
`;

export const Box = styled(BaseBox)`
  padding: 20px;
  overflow: hidden;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding: 40px 64px;
  }
`;

export const PictureBox = styled(BaseBox)`
  padding: 20px 40px 0px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding: 80px 96px 0px;
  }
`;
