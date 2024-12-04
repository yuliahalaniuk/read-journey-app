import styled from "styled-components";
import { SidebarBase } from "./FlexBox";

export const SidebarContainer = styled(SidebarBase)`
  background-color: ${(p) => p.theme.background.secondary};
  border-radius: ${(p) => p.theme.borderRadius.main};

  width: 100%;
  padding: 20px;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    padding: 32px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    max-width: 353px;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    height: auto;
    padding: 40px 20px;
  }
`;
