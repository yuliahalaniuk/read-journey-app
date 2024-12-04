import styled from "styled-components";

export const GridBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(137px, 1fr));
  gap: 16px;
  width: 100%;
  overflow: hidden;
  justify-content: start;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, minmax(137px, 1fr));

    gap: 24px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(5, minmax(137px, 1fr));
  }
`;
