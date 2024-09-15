import * as yup from "yup";

export const filterSchema = yup.object().shape({
  title: yup.string().optional(),
  author: yup.string().optional(),
});
