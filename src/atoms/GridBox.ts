import styled from "styled-components";

export const GridBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 960px) {
    gap: 24px;
  }
`;
