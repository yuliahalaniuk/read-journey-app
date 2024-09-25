import styled from "styled-components";

export const BaseButton = styled.button`
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

  font-size: 14px;
  font-weight: 500;
  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.background.secondary};
    color: ${(p) => p.theme.text.main};
    border: 1px solid ${(p) => p.theme.border.button};
  }

  transition: all ${(p) => p.theme.timingFnMain};

  max-width: 225px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 16px 30px;
  }
`;

export const TransparentBtn = styled(BaseButton)<{ $sizeType?: "s" | "m" }>`
  background-color: "transparent";
  color: ${(p) => p.theme.text.main};
  border: 1px solid ${(p) => p.theme.border.button};

  padding: ${(p) => (p.$sizeType === "m" ? "12px 24px" : "10px 20px")};
  font-size: 14px;
  font-weight: 700;

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.accentColor};
    color: ${(p) => p.theme.text.inverted};
    border: 1px solid ${(p) => p.theme.accentColor};
  }

  transition: all ${(p) => p.theme.timingFnMain};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: ${(p) => (p.$sizeType === "m" ? "14px 28px" : "12px 28px")};
  }
`;
