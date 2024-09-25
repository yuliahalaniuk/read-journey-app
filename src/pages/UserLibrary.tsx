import React from "react";
import Header from "../components/layout/Header/Header";
import { Container } from "../atoms/PageContainer";
import LibrarySideBar from "../components/dashboard/SideBar/LibrarySideBar";

const UserLibrary = () => {
  return (
    <Container>
      <Header />

      <LibrarySideBar />
    </Container>
  );
};

export default UserLibrary;
