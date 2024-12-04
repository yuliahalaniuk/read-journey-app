import { baseTheme } from "../theme";

export const isTabletQuery = {
  query: `(min-width: ${baseTheme.breakpoints.tablet}) and (max-width: ${baseTheme.breakpoints.desktop})`,
};

export const isMobileQuery = {
  query: `(max-width: ${baseTheme.breakpoints.mobile})`,
};

export const isDesktopQuery = {
  query: `(min-width: ${baseTheme.breakpoints.desktop})`,
};

export const isTabletAndMoreQuery = {
  query: `(min-width: ${baseTheme.breakpoints.tablet})`,
};
