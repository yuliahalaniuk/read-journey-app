import { ReactNode } from "react";
import {
  Title,
  ImgContainer,
  MainContainer,
  Box,
  PictureBox,
} from "./AuthPageTemplate.styled";
import { useMediaQuery } from "react-responsive";
import { isTabletAndMoreQuery } from "../../../utils/mediaQueries";

const AuthPageTemplate = ({ children }: { children?: ReactNode }) => {
  const isDesktopOrLaptop = useMediaQuery(isTabletAndMoreQuery);

  return (
    <MainContainer className="Main">
      <Box $align="start">
        <ImgContainer $align="start">
          <img
            src={
              isDesktopOrLaptop ? "/images/logo.png" : "/images/logoSmall.png"
            }
            alt={"Logo"}
            width={isDesktopOrLaptop ? 182 : 42}
            height={17}
          />
        </ImgContainer>{" "}
        <Title>
          Expand your mind, reading <span>a book</span>
        </Title>
        {children}
      </Box>
      <PictureBox>
        <img src="/images/iphone.png" alt={"Mobile"} />
      </PictureBox>
    </MainContainer>
  );
};

export default AuthPageTemplate;
