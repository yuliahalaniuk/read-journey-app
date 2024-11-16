import {
  FilterFormData,
  filterFormFieldsInfo,
} from "../../data/formFieldsInfo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { filterSchema } from "../../validation-schemes/filterValidation";
import PrimaryForm from "./PrimaryForm";
import { useNavigate } from "react-router-dom";
import { transformDataToQuery } from "../../utils/transformDataToQuery";

const FilterForm = () => {
  const navigate = useNavigate();

  const form = useForm<FilterFormData>({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: yupResolver<FilterFormData>(filterSchema),
  });

  const handleSubmit = (data: FilterFormData) => {
    const query = transformDataToQuery(data);
    navigate(`?${query}`, { replace: true });
  };

  return (
    <PrimaryForm
      onSubmit={form.handleSubmit(
        (data) => {
          console.log("Filter Form submitted with data:", data);
          const filteredData = Object.fromEntries(
            Object.entries(data).filter(([_, value]) => value?.trim())
          );
          handleSubmit(filteredData);
        },
        (errors) => {
          console.log("Filter Form submission errors:", errors);
        }
      )}
      title="Filters:"
      btnText="Apply"
      form={form}
      fieldsInfo={filterFormFieldsInfo}
    />
  );
};

export default FilterForm;
