import {
  FilterFormData,
  filterFormFieldsInfo,
} from "../../data/formFieldsInfo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { filterSchema } from "../../validation-schemes/filterValidation";
import PrimaryForm from "./PrimaryForm";

const FilterForm = () => {
  const form = useForm<FilterFormData>({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: yupResolver<FilterFormData>(filterSchema),
  });

  const onValid = (data: FilterFormData) => {
    console.log(data);
  };

  return (
    <PrimaryForm
      onSubmit={form.handleSubmit(onValid)}
      title="Filters:"
      btnText="Apply"
      form={form}
      fieldsInfo={filterFormFieldsInfo}
    />
  );
};

export default FilterForm;
