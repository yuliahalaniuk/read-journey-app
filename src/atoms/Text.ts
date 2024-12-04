import styled from "styled-components";
import { BaseTextCss, BaseTypographyProps } from "./base/Typography";

export const BaseText = styled.span<BaseTypographyProps>`
  font-weight: 500;

  ${BaseTextCss};
  letter-spacing: -0.02em;
  cursor: inherit;
`;

export const P = styled.p<BaseTypographyProps>`
  ${BaseTextCss};

  font-weight: 500;
  letter-spacing: -0.02em;
`;

export const H1 = styled.h1<BaseTypographyProps>`
  ${BaseTextCss};
  font-weight: ${({ $weight = 700 }) => $weight};
`;

export const H2 = styled.h2<BaseTypographyProps>`
  ${BaseTextCss};
  font-weight: ${({ $weight = 600 }) => $weight};
`;

export const H3 = styled.h3<BaseTypographyProps>`
  ${BaseTextCss};
`;

export const Text = styled(BaseText)<{
  $primary?: boolean;
  $textAlign?: string;
  $size?: string;
}>`
  letter-spacing: -0.02em;
  color: ${(p) => (p.$primary ? p.theme.text.main : p.theme.text.secondary)};
`;

export const TextWithAccent = styled(P)<{
  $primary?: boolean;
}>`
  color: ${(p) => (p.$primary ? p.theme.text.main : p.theme.text.secondary)};

  span {
    color: ${(p) => (p.$primary ? p.theme.text.secondary : p.theme.text.main)};
  }
`;

export const MainTitle = styled(H2)`
  font-size: 20px;
  color: ${(p) => p.theme.text.main};
  margin-bottom: 34px;
  width: 100%;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    margin-bottom: 32px;
    font-size: 28px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    margin-bottom: 44px;
  }
`;

export const SecondaryTitle = styled(P)`
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  color: ${(p) => p.theme.text.main};
`;
