import { ReactNode } from "react";
import Header from "../Header/Header";
import { Container, Content } from "./MainLayout.styled";

const MainLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <Container>
      <Header />

      <Content>{children}</Content>
    </Container>
  );
};

export default MainLayout;
