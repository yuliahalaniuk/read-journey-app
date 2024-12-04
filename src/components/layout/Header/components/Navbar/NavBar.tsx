import { FlexUl } from "../../../../../atoms/FlexBox";
import { navLinksData } from "../../../../../data/navLinksData";
import { NavLink } from "react-router-dom";
import { NavLinkItem } from "./NavBar.styled";
import { Property } from "csstype";

const NavBar = ({
  direction = "row",
  pathname,
  onLinkClick,
}: {
  direction?: Property.FlexDirection;
  pathname?: string;
  onLinkClick?: () => void;
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
          <NavLinkItem
            key={info?.id}
            $isActive={pathname?.includes(info?.href)}
          >
            <NavLink to={info?.href} onClick={onLinkClick}>
              {info?.label}
            </NavLink>
          </NavLinkItem>
        );
      })}
    </FlexUl>
  );
};

export default NavBar;
