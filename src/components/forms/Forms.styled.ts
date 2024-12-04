import styled from "styled-components";
import { FlexBox, FlexForm } from "../../atoms/Flex";
import { P } from "../../atoms/Text";

export const Form = styled(FlexForm)`
  height: 100%;
  max-width: 100%;
  gap: 20px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    max-width: 472px;
    gap: 82px;
  }
`;

export const ButtonPairBox = styled(FlexBox)`
  gap: 14px;
  justify-content: start;
  flex-wrap: wrap;
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    gap: 20px;
  }
`;

export const Title = styled(P)`
  font-size: 10px;
  line-height: 120%;
  padding-left: 14px;
  margin-bottom: 8px;
  color: ${(p) => p.theme.text.main};
`;
