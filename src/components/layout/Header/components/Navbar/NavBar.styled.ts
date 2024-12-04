import styled from "styled-components";
import { FlexLi } from "../../../../../atoms/FlexBox";

export const NavLinkItem = styled(FlexLi)<{ $isActive?: boolean }>`
  width: fit-content;

  a {
    padding-block: 8px;
    padding-inline: 2px;
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    letter-spacing: -0.02em;

    color: ${(p) => (p.$isActive ? p.theme.text.main : p.theme.text.secondary)};
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${(p) =>
      p?.$isActive ? p.theme.colors.blue : "transparent"};
    border-radius: 3px;
  }
`;
