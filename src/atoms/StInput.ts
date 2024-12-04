import styled from "styled-components";
import { FlexLabel } from "./FlexBox";

export const ErrorText = styled.p`
  width: 100%;
  color: ${(p) => p.theme.colors.error};
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  padding-inline: 14px;
  text-align: left;

  /* position: absolute;
  top: 100%;
  left: 0; */
`;

export const LabelContainer = styled(FlexLabel)<{
  $errors?: boolean;
  $hasRightPadding?: boolean;
}>`
  position: relative;

  background-color: ${(p) => p.theme.background.input};
  border-radius: ${(p) => p.theme.borderRadius.input};
  border: 1px solid ${(p) => (p.$errors ? p.theme.colors.error : "transparent")};
  padding-block: 14px;
  padding-left: 14px;
  padding-right: ${(p) => (p.$hasRightPadding ? "48px" : "14px")};

  transition: border-color ${(p) => p.theme.timingFnMain};

  &:hover {
    border-color: ${(p) =>
      p.$errors ? p.theme.colors.errorLight : p.theme.text.secondary};
  }

  &:focus-within {
    border-color: ${(p) =>
      p.$errors ? p.theme.colors.errorPressed : p.theme.text.main};
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding-block: 16px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  min-width: 100px;
  background-color: transparent;
  color: ${(p) => p.theme.text.main};
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  letter-spacing: -0.02em;
  transition: border-color ${(p) => p.theme.timingFnMain},
    outline ${(p) => p.theme.timingFnMain};

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.accentColor};
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    font-size: 14px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${(p) => p.theme.background.input} inset !important;
    -webkit-text-fill-color: ${(p) => p.theme.text.main};
  }
`;

export const StLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.text.secondary};
  white-space: nowrap;
`;
