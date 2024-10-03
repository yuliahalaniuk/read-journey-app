import { BaseBox } from "../../../atoms/BaseBox";
import { BaseButton } from "../../../atoms/Buttons";
import { FlexBox } from "../../../atoms/Flex";
import { useMediaQuery } from "react-responsive";
import UserComponent from "./components/UserComponent/UserComponent";
import NavBar from "./components/Navbar/NavBar";
import LogoutBtn from "../../../atoms/LogoutBtn";
import { Box } from "./Header.styled";

const Header = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <Box>
      <BaseBox $fDirection="row" $justify="space-between">
        <FlexBox $align="start">
          <img
            src={isDesktop ? "/images/logo.png" : "/images/logoSmall.png"}
            alt={"Logo"}
            width={isDesktop ? 182 : 42}
            height={17}
          />
        </FlexBox>

        {!isMobile && <NavBar />}

        <FlexBox $fDirection="row" $gap="16px" $justify="end">
          <UserComponent />

          {isMobile ? (
            <BaseButton>
              {/* <MenuIcon /> */}
              Menu
            </BaseButton>
          ) : (
            <LogoutBtn />
          )}
        </FlexBox>
      </BaseBox>
    </Box>
  );
};

export default Header;
