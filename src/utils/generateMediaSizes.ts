import { css } from "styled-components";
import { SizeMapEntity, SizeTypeEnum } from "../types/global";

export const generateMediaSizes = (
  sizeMap: SizeMapEntity,
  $type?: SizeTypeEnum
) => {
  const getSize = (breakpoint: keyof SizeMapEntity) => {
    return $type
      ? sizeMap[breakpoint][$type]
      : sizeMap[breakpoint][SizeTypeEnum.S];
  };

  return css`
    ${(p) => {
      const size = getSize("mobile");
      return `
      width: ${size};
      height: ${size};
    `;
    }}

    @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
      ${(p) => {
        const size = getSize("tablet");
        return `
        width: ${size};
        height: ${size};
      `;
      }}
    }

    @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
      ${(p) => {
        const size = getSize("desktop");
        return `
        width: ${size};
        height: ${size};
      `;
      }}
    }
  `;
};
