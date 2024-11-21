import {
  AddBookFormData,
  addBookFormFieldsInfo,
  FilterFormData,
} from "../../data/formFieldsInfo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addBookSchema } from "../../validation-schemes/addBookSchema";
import PrimaryForm from "./PrimaryForm";

const AddBookForm = ({ onValid }: { onValid?: (data: any) => void }) => {
  const form = useForm<AddBookFormData>({
    // mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: yupResolver<FilterFormData>(addBookSchema),
  });

  return (
    <PrimaryForm
      onSubmit={form.handleSubmit(
        (data) => {
          onValid?.(data);
        },
        (errors) => {
          console.log("Filter Form submission errors:", errors);
        }
      )}
      title="New book:"
      btnText="Add book"
      form={form}
      fieldsInfo={addBookFormFieldsInfo}
    />
  );
};

export default AddBookForm;
