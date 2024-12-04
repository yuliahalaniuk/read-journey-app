import { css } from "styled-components";
import { Property } from "csstype";

type FontWeight = 300 | 400 | 500 | 600 | 700 | 800 | 900;

enum FontFamilyNames {
  Comfortaa = "Comfortaa",
  ComfortaaMedium = "ComfortaaMedium",
  ComfortaaBold = "ComfortaaBold",
  Montserrat = "Montserrat",
  MontserratMedium = "MontserratMedium",
  MontserratSemiBold = "MontserratSemiBold",
  MontserratBold = "MontserratBold",
  MontserratBlack = "MontserratBlack",
  RalewayBold = "RalewayBold",
  RalewayExtraBold = "RalewayExtraBold",
  RalewayBlack = "RalewayBlack",
  Roboto = "Roboto",
  RobotoMedium = "RobotoMedium",
  RobotoBold = "RobotoBold",
  RobotoBlack = " RobotoBlack",
  Inter = "Inter",
  Manrope = "Manrope",
}
type FontType = keyof typeof FontFamilyNames | FontFamilyNames;

export interface BaseTypographyProps {
  $family?: FontType;
  $size?: string | Property.FontSize;
  $lineHeight?: Property.LineHeight;
  $weight?: FontWeight;
  $align?: Property.TextAlign;
  $textTransform?: Property.TextTransform;
  $textDecoration?: Property.TextDecoration;
  $fontStyle?: Property.FontStyle;
  $color?: Property.Color;
  $padding?: Property.Padding;
  $margin?: Property.Margin;
}

export interface TypographyProps extends BaseTypographyProps {
  $xsStyles?: BaseTypographyProps;
  $xlStyles?: BaseTypographyProps;
}

export const BaseTextCss = css<TypographyProps>`
  font-family: ${({ $family = "inherit" }) => $family};
  font-style: ${({ $fontStyle = "normal" }) => $fontStyle};
  font-size: ${({ $size }) =>
    typeof $size === "string" ? $size : `${$size ?? 14}px`};
  line-height: ${({ $lineHeight = 1.3 }) => $lineHeight};
  font-weight: ${({ $weight = "inherit" }) => $weight};
  text-align: ${({ $align = "left" }) => $align};
  text-transform: ${({ $textTransform = "none" }) => $textTransform};
  color: ${({ $color = "inherit" }) => $color};
  text-decoration: ${({ $textDecoration = "none" }) => $textDecoration};
  padding: ${({ $padding = 0 }) => $padding}px;
  margin: ${({ $margin = 0 }) => $margin}px;
`;
