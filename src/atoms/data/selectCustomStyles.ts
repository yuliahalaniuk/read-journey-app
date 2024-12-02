import { StylesConfig } from "react-select";
import { baseTheme } from "../../theme";
import { SelectOptionEntity } from "../../types/global";

export const selectCustomStyles: StylesConfig<SelectOptionEntity, false> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    outline: "none",
    border: "1px solid #3e3e3e",
    borderRadius: "12px",
    width: "153px",
    height: "46px",
    color: "red",
    borderColor: state.isFocused
      ? baseTheme.border.select
      : baseTheme.border.select,
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "#f9f9f9",
    position: "relative",
    borderColor: state.isFocused
      ? baseTheme.border.select
      : baseTheme.border.select,
  }),
  singleValue: (provided) => ({
    ...provided,
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "129%",
    letterSpacing: "-0.02em",
    color: "#f9f9f9",
  }),
  menu: (provided) => ({
    ...provided,
    position: "absolute",
    top: "100%",
    left: 0,
    borderRadius: "12px",
    backgroundColor: baseTheme.background.light,
    padding: "8px 0",
  }),
  menuList: (provided) => ({
    ...provided,
    borderRadius: "12px",
    backgroundColor: baseTheme.background.light,
    padding: "14px 0",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "10px 14px",
    borderBottom: "none",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "129%",
    letterSpacing: "-0.02em",
    color: state.isSelected ? "#f9f9f9" : "#686868",
    backgroundColor: state.isFocused
      ? baseTheme.background.secondary
      : baseTheme.background.light,
  }),
};
