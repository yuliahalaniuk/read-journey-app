import { ReactNode } from "react";
import {
  Title,
  ImgContainer,
  MainContainer,
  Box,
  PictureBox,
} from "./AuthPageTemplate.styled";
import { useMediaQuery } from "react-responsive";

const AuthPageTemplate = ({ children }: { children?: ReactNode }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1280px)",
  });

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
      {!isTablet && (
        <PictureBox>
          <img src="/images/iphone.png" alt={"Mobile"} />
        </PictureBox>
      )}
    </MainContainer>
  );
};

export default AuthPageTemplate;
