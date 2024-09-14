import React from "react";
import styled from "styled-components";
import { BaseBox } from "../atoms/BaseBox";
import { FlexBox } from "../atoms/FlexBox";
import { useMediaQuery } from "react-responsive";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <MainContainer className="Main">
      <BaseBox>
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
        <RegisterForm />
      </BaseBox>
      {/* <BaseBox></BaseBox> */}
    </MainContainer>
  );
};

const Title = styled.h1`
  width: 100%;

  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0.02em;

  color: ${(p) => p.theme.text.main};

  span {
    color: ${(p) => p.theme.text.lightTransparent};
  }

  margin-bottom: 20px;
`;

const ImgContainer = styled(FlexBox)`
  margin-bottom: 40px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 32px;

    flex-direction: row;
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export default RegisterPage;
