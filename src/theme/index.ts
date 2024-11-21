export const baseTheme = {
  background: {
    main: "#141414",
    mainTransparent: "rgba(20, 20, 20, 0.4)",
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
    modal: "12px",
  },

  border: {
    button: "rgba(249, 249, 249, 0.2)",
    select: "#3e3e3e",
  },

  accentColor: "#f9f9f9",

  animationTime: "250",
  timingFnMain: "linear 250ms",

  backdropColor: "rgba(20, 20, 20, 0.6)",

  delete: {
    stroke: "#E85050",
    background: "rgba(232, 80, 80, 0.1)",
    border: "rgba(232, 80, 80, 0.2)",
  },

  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1280px",
  },

  colors: {
    error: "#e90516",
    errorLight: "#ff6b6b",
    errorPressed: "#ff4f4f",
    success: "#30b94d",
    blue: "#4f92f7",
  },
};

type ITheme = typeof baseTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
