import * as yup from "yup";

export const filterSchema = yup.object().shape({
  title: yup.string().typeError("Title should be a string").optional(),
  author: yup.string().typeError("Author should be a string").optional(),
});
