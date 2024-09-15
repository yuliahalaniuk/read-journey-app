import styled from "styled-components";

export const BaseButton = styled.button`
  /* width: 100%; */

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: 0.02em;

  border-radius: ${(p) => p.theme.borderRadius.button};

  flex-shrink: 0;
  width: max-content;
`;

export const AccentedBtn = styled(BaseButton)`
  background-color: ${(p) => p.theme.accentColor};
  color: ${(p) => p.theme.text.inverted};

  border: 1px solid ${(p) => p.theme.accentColor};
  padding: 12px 30px;

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.background.secondary};
    color: ${(p) => p.theme.text.main};
    border: 1px solid ${(p) => p.theme.border.button};
  }

  transition: all ${(p) => p.theme.timingFnMain};

  max-width: 225px;
`;

// Todo
export const TransparentBtn = styled(BaseButton)`
  background-color: "transparent";
  color: ${(p) => p.theme.text.main};
  border: 1px solid ${(p) => p.theme.border.button};

  padding: 12px 28px;

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.accentColor};
    color: ${(p) => p.theme.text.inverted};
    border: 1px solid ${(p) => p.theme.accentColor};
  }

  transition: all ${(p) => p.theme.timingFnMain};
`;
