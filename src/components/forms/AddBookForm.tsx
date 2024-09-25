import {
  AddBookFormData,
  addBookFormFieldsInfo,
  FilterFormData,
} from "../../data/formFieldsInfo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addBookSchema } from "../../validation-schemes/addBookSchema";
import PrimaryForm from "./PrimaryForm";

const AddBookForm = () => {
  const form = useForm<AddBookFormData>({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: yupResolver<FilterFormData>(addBookSchema),
  });

  const onValid = (data: FilterFormData) => {
    console.log(data);
  };

  return (
    <PrimaryForm
      onSubmit={form.handleSubmit(onValid)}
      title="Filters:"
      btnText="Add book"
      form={form}
      fieldsInfo={addBookFormFieldsInfo}
    />
  );
};

export default AddBookForm;
