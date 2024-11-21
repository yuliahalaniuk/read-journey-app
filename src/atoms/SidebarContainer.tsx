import styled from "styled-components";
import { BaseBox } from "./BaseBox";

export const SidebarContainer = styled(BaseBox)`
  /* position: sticky;
  top: 0;
  left: 0; */
  /* bottom: 0; */

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
  }

  @media screen and (min-width: 1280px) {
    max-width: 353px;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
  }
`;
