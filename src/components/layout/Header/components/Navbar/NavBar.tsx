import styled from "styled-components";
import { FlexLi, FlexUl } from "../../../../../atoms/Flex";
import { navLinksData } from "../../../../../data/navLinksData";
import { NavLink } from "react-router-dom";

const NavBar = ({
  direction = "row",
  pathname,
}: {
  direction?: string;
  pathname?: string;
}) => {
  return (
    <FlexUl
      $fDirection={direction}
      $gap={direction.includes("row") ? "32px" : "20px"}
      $justify="center"
      $align={direction.includes("column") ? "start" : "center"}
    >
      {navLinksData?.map((info) => {
        return (
          <NavLinkItem key={info?.id} $isActive={pathname === info?.href}>
            <NavLink to={info?.href}>{info?.label}</NavLink>
          </NavLinkItem>
        );
      })}
    </FlexUl>
  );
};

const NavLinkItem = styled(FlexLi)<{ $isActive?: boolean }>`
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

export default NavBar;
