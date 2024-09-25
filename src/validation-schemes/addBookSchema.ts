import * as yup from "yup";

export const addBookSchema = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  pages: yup.number().required(),
});
