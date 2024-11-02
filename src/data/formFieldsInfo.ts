import { HTMLInputTypeAttribute } from "react";
import { FieldValues, Path } from "react-hook-form";

export interface RegisterFormData {
  email: string;
  password: string;

  name?: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface FilterFormData {
  title?: string;
  author?: string;
}

export interface AddBookFormData {
  title?: string;
  author?: string;
  pages?: number;
}

export interface PageFormData {
  page?: number;
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

export const addBookFormFieldsInfo: FormFieldInfo<AddBookFormData>[] = [
  {
    name: "title",
    label: "Book title:",
    required: false,
  },
  {
    name: "author",
    label: "The author:",
    canBeHidden: true,
    required: false,
  },
  {
    name: "pages",
    label: "Number of pages:",
    canBeHidden: true,
    required: false,
  },
];

export const pageFormFieldsInfo: FormFieldInfo<PageFormData>[] = [
  {
    name: "page",
    label: "Page number",
    canBeHidden: true,
    required: false,
  },
];