import styled from "styled-components";

export const BaseLink = styled.a`
  flex-shrink: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 117%;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;

  color: ${(p) => p.theme.text.secondary};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.text.main};
  }

  transition: all ${(p) => p.theme.timingFnMain};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
