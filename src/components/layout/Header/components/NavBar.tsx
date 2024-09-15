import styled from "styled-components";
import { FlexBox } from "../../../../atoms/Flex";
import { navLinksData } from "../../../../data/navLinksData";
import { useParams } from "react-router-dom";

//ToDo це ліст

const NavBar = ({ direction }: { direction?: string }) => {
  const pathname = useParams();
  console.log("para", pathname);

  const isActive = "/home";

  return (
    <FlexBox $fDirection={direction ? direction : "row"} $gap="32px">
      {navLinksData?.map((info) => {
        return (
          <NavLinkItem key={info?.id} $isActive={isActive === info?.href}>
            <a href={info?.href}>{info?.label}</a>
          </NavLinkItem>
        );
      })}
    </FlexBox>
  );
};

const NavLinkItem = styled(FlexBox)<{ $isActive?: boolean }>`
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
