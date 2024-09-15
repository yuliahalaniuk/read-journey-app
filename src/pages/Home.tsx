import React from "react";
import Header from "../components/layout/Header/Header";
import styled from "styled-components";
import { FlexBox } from "../atoms/Flex";
import SideBar from "../components/dashboard/SideBar/SideBar";

const Home = () => {
  return (
    <Container>
      <Header />

      <SideBar />
    </Container>
  );
};

const Container = styled(FlexBox)`
  padding: 20px 20px 40px;
  gap: 10px;
`;

export default Home;
