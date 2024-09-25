import React from "react";
import { useRouteError, Link } from "react-router-dom";
import styled from "styled-components";
import { FlexBox } from "../atoms/Flex";

const ErrorPageContainer = styled(FlexBox)`
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: ${(p) => p.theme.text.main};
`;

const ErrorTitle = styled.h1`
  font-size: 5rem;
  margin-bottom: 20px;
  color: ${(p) => p.theme.colors.errorLight};
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const HomeButton = styled(Link)`
  padding: 10px 20px;
  background-color: ${(p) => p.theme.colors.errorLight};
  color: ${(p) => p.theme.text.main};
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(p) => p.theme.colors.errorPressed};
  }
`;

const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorPageContainer>
      <ErrorTitle>Oops!</ErrorTitle>
      <ErrorMessage>Something went wrong. Please try again later.</ErrorMessage>
      <HomeButton to="/">Go Back Home</HomeButton>
    </ErrorPageContainer>
  );
};

export default ErrorBoundary;
