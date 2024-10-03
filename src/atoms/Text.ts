import styled from "styled-components";

export const MainTitle = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 114%;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.text.main};
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
  text-align:  ${ p => p.$textAlign ?  p.$textAlign :'center' };
  color: ${(p) => (p.$primary ? p.theme.text.main : p.theme.text.secondary)};

  span {
    color: ${(p) => (p.$primary ? p.theme.text.secondary : p.theme.text.main)};
  }
`;