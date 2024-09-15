import * as yup from "yup";
import { IsEmail, IsPassword } from "./base";

export const logInSchema = yup.object().shape({
  email: IsEmail().required("Email is required"),
  password: IsPassword().required("Password is required"),
});
