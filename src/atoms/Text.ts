import styled from "styled-components";

export const MainTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 114%;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.text.main};
  margin-bottom: 34px;
  text-align: left;
  width: 100%;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    margin-bottom: 32px;
    font-size: 28px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    margin-bottom: 44px;
  }
`;

//ToDo css types

export const TextWithAccent = styled.p<{
  $primary?: boolean;
  $textAlign?: string;
}>`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  text-align: ${(p) => (p.$textAlign ? p.$textAlign : "center")};
  color: ${(p) => (p.$primary ? p.theme.text.main : p.theme.text.secondary)};

  span {
    color: ${(p) => (p.$primary ? p.theme.text.secondary : p.theme.text.main)};
  }
`;

export const Text = styled.span<{
  $primary?: boolean;
  $textAlign?: string;
  $size?: string;
}>`
  font-weight: 500;
  font-size: ${(p) => (p.$size ? p.$size : "14px")};
  line-height: 100%;
  letter-spacing: -0.02em;
  text-align: ${(p) => (p.$textAlign ? p.$textAlign : "center")};
  color: ${(p) => (p.$primary ? p.theme.text.main : p.theme.text.secondary)};
`;

export const P = styled.p<{
  $primary?: boolean;
  $textAlign?: string;
  $size?: string;
}>`
  font-weight: 500;
  font-size: ${(p) => (p.$size ? p.$size : "14px")};
  line-height: 100%;
  letter-spacing: -0.02em;
  text-align: ${(p) => (p.$textAlign ? p.$textAlign : "center")};
  color: ${(p) => (p.$primary ? p.theme.text.main : p.theme.text.secondary)};
`;

export const SecondaryTitle = styled.p`
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  text-align: left;

  color: ${(p) => p.theme.text.main};
`;