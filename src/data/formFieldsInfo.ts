import { HTMLInputTypeAttribute } from "react";
import { FieldValues, Path } from "react-hook-form";

export interface RegisterFormData {
  email?: string;
  name?: string;

  password?: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface FilterFormData {
  title?: string;
  author?: string;
}

export interface FormFieldInfo<FormData extends FieldValues = FieldValues> {
  name?: Path<FormData>;
  label?: string;
  required?: boolean;
  canBeHidden?: boolean;

  type?: HTMLInputTypeAttribute;
  value?: string;
  disabled?: boolean;
}

export const registerFormFieldsInfo: FormFieldInfo<RegisterFormData>[] = [
  {
    name: "name",
    label: "Name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    canBeHidden: true,
    required: true,
  },
  // {
  //   name: "passwordCheck",
  //   label: "Password Check",
  //   canBeHidden: true,
  //   required: true,
  // },
];

export const loginFormFieldsInfo: FormFieldInfo<LoginFormData>[] = [
  {
    name: "email",
    label: "Email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    canBeHidden: true,
    required: true,
  },
];

export const filterFormFieldsInfo: FormFieldInfo<FilterFormData>[] = [
  {
    name: "title",
    label: "Book title",
    required: false,
  },
  {
    name: "author",
    label: "The author",
    canBeHidden: true,
    required: false,
  },
];