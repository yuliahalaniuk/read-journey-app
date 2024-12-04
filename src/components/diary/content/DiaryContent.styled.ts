import styled from "styled-components";
import { P } from "../../../atoms/Text";

export const NameText = styled(P)`
  font-weight: 700;
  font-size: 18px;
  color: ${(p) => p.theme.text.main};
  margin-bottom: 2px;
  text-align: center;
`;

export const SubText = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: ${(p) => p.theme.text.secondary};
  text-align: center;
  margin-bottom: 4px;
`;

export const MainBookImg = styled.img`
  width: 137px;
  height: 208px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    width: 169px;
    height: 256px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    width: 224px;
    height: 340px;
  }
`;
