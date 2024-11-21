import { ReactNode, useRef } from "react";
import Header from "../Header/Header";
import { Container, Content } from "./MainLayout.styled";
import useScrollUp from "../../../hooks/useScrollUp";

const MainLayout = ({ children }: { children?: ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { isScrollingUp } = useScrollUp();

  return (
    <Container ref={scrollRef}>
      <Header isScrollingUp={isScrollingUp} />

      <Content>{children}</Content>
    </Container>
  );
};

export default MainLayout;
