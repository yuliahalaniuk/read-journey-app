import styled from "styled-components";

export const FlexBox = styled.div<{
  $gap?: string;
  $fDirection?: string;
  $align?: string;
  $justify?: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: ${(p) => (p.$fDirection ? p.$fDirection : "column")};
  gap: ${(p) => (p.$gap ? p.$gap : "0px")};
  align-items: ${(p) => (p.$align ? p.$align : "center")};
  justify-content: ${(p) => (p.$justify ? p.$justify : "start")};
`;

export const FlexLi = styled.li<{
  $gap?: string;
  $fDirection?: string;
  $align?: string;
  $justify?: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: ${(p) => (p.$fDirection ? p.$fDirection : "column")};
  gap: ${(p) => (p.$gap ? p.$gap : "0px")};
  align-items: ${(p) => (p.$align ? p.$align : "center")};
  justify-content: ${(p) => (p.$justify ? p.$justify : "start")};
`;

export const FlexForm = styled.form<{
  $gap?: string;
  $fDirection?: string;
  $align?: string;
  $justify?: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: ${(p) => (p.$fDirection ? p.$fDirection : "column")};
  gap: ${(p) => (p.$gap ? p.$gap : "0px")};
  align-items: ${(p) => (p.$align ? p.$align : "center")};
  justify-content: ${(p) => (p.$justify ? p.$justify : "start")};
`;

export const FlexUl = styled.ul<{
  $gap?: string;
  $fDirection?: string;
  $align?: string;
  $justify?: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: ${(p) => (p.$fDirection ? p.$fDirection : "column")};
  gap: ${(p) => (p.$gap ? p.$gap : "0px")};
  align-items: ${(p) => (p.$align ? p.$align : "center")};
  justify-content: ${(p) => (p.$justify ? p.$justify : "start")};
`;
