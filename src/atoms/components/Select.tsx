import Select from "react-select";
import { SelectOptionEntity } from "../../types/global";
import { selectCustomStyles } from "../data/selectCustomStyles";

interface SelectStProps {
  options?: SelectOptionEntity[];
  value: SelectOptionEntity | null;
  onChange: (p: SelectOptionEntity | null) => void;
}

const SelectSt: React.FC<SelectStProps> = ({ options, value, onChange }) => {
  return (
    <Select<SelectOptionEntity>
      value={value}
      onChange={onChange}
      options={options}
      styles={selectCustomStyles}
      isSearchable={false}
    />
  );
};

export default SelectSt;
