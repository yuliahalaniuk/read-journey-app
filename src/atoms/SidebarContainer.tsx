import styled from "styled-components";
import { BaseBox, SecondaryBaseBox } from "./BaseBox";

export const SidebarContainer = styled(BaseBox)`
  /* position: sticky;
  top: 0;
  left: 0; */
  /* bottom: 0; */
  width: 100%;

  align-items: stretch;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex: 2 50%;

    .FormContainer,
    ${SecondaryBaseBox} {
      max-width: 50%;
      flex-basis: 50%;
      flex-grow: 1;
    }
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    max-width: 353px;

    .FormContainer,
    ${SecondaryBaseBox} {
      max-width: 100%;
      flex-basis: 100%;
    }
  }
`;
