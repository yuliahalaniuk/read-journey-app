import Select from "react-select";
import { baseTheme } from "../../theme";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "transparent",
    outline: "none",
    border: "1px solid #3e3e3e",
    borderRadius: "12px",
    // padding: "14px",
    width: "153px",
    height: "46px",
    color: "red",
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "#f9f9f9",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "129%",
    letterSpacing: "-0.02em",
    color: "#f9f9f9",
  }),
  menu: () => ({
    borderRadius: "12px",

    backgroundColor: baseTheme.background.light,
    padding: "8px 0",
  }),
  menuList: () => ({
    borderRadius: "12px",
    backgroundColor: baseTheme.background.light,
    padding: "14px 0",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  option: (provided: any, state: any) => ({
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
const SelectSt = () => {
  return <Select options={options} styles={customStyles} />;
};

export default SelectSt;
