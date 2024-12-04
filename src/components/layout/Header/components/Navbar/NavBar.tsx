import { FlexUl } from "../../../../../atoms/Flex";
import { navLinksData } from "../../../../../data/navLinksData";
import { NavLink } from "react-router-dom";
import { NavLinkItem } from "./NavBar.styled";

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

export default NavBar;
