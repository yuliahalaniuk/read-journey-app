import * as yup from "yup";

export const validationErrorMsgs = {
  name: "Name is required",

  email: {
    isRequired: "Email is required",
    isNotValid: "Invalid email",
  },

  password: {
    invalidLength: (length: number = 6) =>
      `Password length should be at least ${length} characters`,
    invalidPassword: "Password is invalid",
    doNotMatch: "Passwords do not match",
  },

  isRequiredField: "Field is required",
};

const EmailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;

export const IsEmail = () =>
  yup
    .string()
    .email({ regex: EmailRegExp })
    .matches(EmailRegExp, validationErrorMsgs.email.isNotValid);

export const IsPassword = (length: number = 6) =>
  yup.string().min(length, validationErrorMsgs.password.invalidLength(length));
