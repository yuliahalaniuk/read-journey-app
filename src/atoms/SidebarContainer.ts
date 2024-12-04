import styled from "styled-components";
import { BaseBox } from "./BaseBox";

export const SidebarContainer = styled(BaseBox)`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    max-width: 353px;
    /* width: 353px; */
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    height: auto;
  }
`;
