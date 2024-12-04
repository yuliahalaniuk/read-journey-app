import { Property } from "csstype";
import { css } from "styled-components";

export interface BlockProps {
  $maxWidth?: Property.MaxWidth;
  $maxHeight?: Property.MaxHeight;
  $minWidth?: Property.MinWidth;
  $minHeight?: Property.MinHeight;

  $width?: Property.Width;
  $height?: Property.Height;
  $fillWidth?: boolean;
  $fillHeight?: boolean;

  $padding?: Property.Padding;
  $margin?: Property.Margin;
}

export interface FlexBaseProps extends BlockProps {
  $flex?: Property.Flex;
  $flexWrap?: Property.FlexWrap;
  $fDirection?: Property.FlexDirection;
  $align?: Property.AlignItems;
  $justify?: Property.JustifyContent;
  $alignSelf?: Property.AlignSelf;
  $gap?: string;
}

export const FlexBoxBaseCss = css<FlexBaseProps>`
  display: flex;
  flex-direction: ${({ $fDirection = "column" }) => $fDirection};
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  align-self: ${({ $alignSelf }) => $alignSelf};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  gap: ${({ $gap = "0px" }) => $gap};
  flex: ${({ $flex }) => $flex};

  max-width: ${({ $maxWidth = null }) => $maxWidth ?? "none"};
  max-height: ${({ $maxHeight = null }) => $maxHeight ?? "none"};

  min-width: ${({ $minWidth = null }) => $minWidth ?? "none"};
  min-height: ${({ $minHeight = null }) => $minHeight ?? "none"};

  width: ${({ $width = "auto", $fillWidth }) => ($fillWidth ? "100%" : $width)};
  height: ${({ $height = "auto", $fillHeight }) =>
    $fillHeight ? "100%" : $height};

  padding: ${({ $padding = "0px" }) => $padding};
  margin: ${({ $margin }) => $margin};
`;
