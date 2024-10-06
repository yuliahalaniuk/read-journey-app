import styled from "styled-components";
import { FlexBox } from "./Flex";
import { SizeMapEntity, SizeTypeEnum } from "../types/global";
import { generateMediaSizes } from "../utils/generateMediaSizes";

const circleSizeMap: SizeMapEntity = {
  mobile: {
    [SizeTypeEnum.S]: "80px",
    [SizeTypeEnum.M]: "100px",
  },
  tablet: {
    [SizeTypeEnum.S]: "100px",
    [SizeTypeEnum.M]: "130px",
  },
  desktop: {
    [SizeTypeEnum.S]: "100px",
    [SizeTypeEnum.M]: "130px",
  },
};

const imagesSizeMap: SizeMapEntity = {
  mobile: {
    [SizeTypeEnum.S]: "32px",
    [SizeTypeEnum.M]: "50px",
  },
  tablet: {
    [SizeTypeEnum.S]: "70px",
    [SizeTypeEnum.M]: "70px",
  },
  desktop: {
    [SizeTypeEnum.S]: "70px",
    [SizeTypeEnum.M]: "70px",
  },
};

export const CircleImgWrapper = styled(FlexBox)<{
  $type?: SizeTypeEnum;
}>`
  border-radius: 50%;
  background-color: ${(p) => p.theme.background.light};
  align-items: center;
  justify-content: center;

  ${(p) => generateMediaSizes(circleSizeMap, p.$type)}

  img {
    ${(p) => generateMediaSizes(imagesSizeMap, p.$type)}
  }
`;
