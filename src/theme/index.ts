export const baseTheme = {
  background: {
    main: "#141414",
    secondary: "#1F1F1F",
    input: "#262626",
    light: "#262626",
  },

  text: {
    main: "#f9f9f9",
    secondary: "#686868",
    inverted: "#1f1f1f",
    lightTransparent: "rgba(227, 227, 227, 0.5)",
  },

  borderRadius: {
    main: "30px",
    input: "12px",
    button: "30px",
    small: "15px",
  },

  border: {
    button: "rgba(249, 249, 249, 0.2)",
  },

  accentColor: "#f9f9f9",

  timingFnMain: "ease-in-out 250ms",

  colors: {
    error: "#e90516",
    success: "#30b94d",
  },
};

type ITheme = typeof baseTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
