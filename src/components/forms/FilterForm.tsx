import {
  FilterFormData,
  filterFormFieldsInfo,
} from "../../data/formFieldsInfo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { filterSchema } from "../../validation-schemes/filterValidation";
import PrimaryForm from "./PrimaryForm";

const FilterForm = ({
  onSubmit,
}: {
  onSubmit?: (data: FilterFormData) => void;
}) => {
  const form = useForm<FilterFormData>({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: yupResolver<FilterFormData>(filterSchema),
  });

  return (
    <PrimaryForm
      onSubmit={onSubmit && form.handleSubmit(onSubmit)}
      title="Filters:"
      btnText="Apply"
      form={form}
      fieldsInfo={filterFormFieldsInfo}
    />
  );
};

export default FilterForm;
