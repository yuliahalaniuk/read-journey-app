import * as yup from "yup";
import { IsEmail, IsPassword, validationErrorMsgs } from "./base";

export const registrationSchema = yup.object().shape({
  name: yup.string().required(validationErrorMsgs.isRequiredField),
  email: IsEmail().required(validationErrorMsgs.isRequiredField),
  password: IsPassword().required(validationErrorMsgs.isRequiredField),
});
