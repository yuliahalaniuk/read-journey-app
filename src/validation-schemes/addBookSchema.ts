import * as yup from "yup";

export const addBookSchema = yup.object().shape({
  title: yup
    .string()
    .typeError("Title should be a string")
    .required("Title is required"),
  author: yup
    .string()
    .typeError("Author should be a string")
    .required("Author is required"),
  pages: yup
    .number()
    .typeError("Pages must be a number")
    .required("Pages number is required"),
});
