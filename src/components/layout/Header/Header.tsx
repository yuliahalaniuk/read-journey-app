import React from "react";
import { BaseBox } from "../../../atoms/BaseBox";
import { TransparentBtn } from "../../../atoms/Buttons";
import { FlexBox } from "../../../atoms/Flex";
import { useMediaQuery } from "react-responsive";
import UserComponent from "./components/UserComponent";
import NavBar from "./components/NavBar";

const Header = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  return (
    <BaseBox $fDirection="row" $justify="space-between">
      <FlexBox $align="start">
        <img
          src={isDesktop ? "/images/logo.png" : "/images/logoSmall.png"}
          alt={"Logo"}
          width={isDesktop ? 182 : 42}
          height={17}
        />
      </FlexBox>

      <NavBar />

      <FlexBox $fDirection="row" $gap="16px">
        <UserComponent />
        <TransparentBtn>Log out</TransparentBtn>
      </FlexBox>
    </BaseBox>
  );
};

export default Header;
