import { PageFormData, pageFormFieldsInfo } from "../../data/formFieldsInfo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PrimaryForm from "./PrimaryForm";
import { pageSchema } from "../../validation-schemes/pageValidation";
import * as yup from "yup";
// const onValid = (data: PageFormData) => {
//   console.log(data);
// };

export type ActionType = "start" | "stop";

const textInfo = {
  start: {
    title: "Start page:",
    btnText: "To start",
  },
  stop: {
    title: "Stop page:",
    btnText: "To stop",
  },
};

const PageForm = ({
  action,
  onValid,
  minPages,
  maxPages,
}: {
  action: ActionType;
  onValid?: (d: PageFormData) => void;
  minPages?: number;
  maxPages?: number;
}) => {
  const pageSchema = yup.object().shape({
    page: yup
      .number()
      .required("Page is required")
      .min(minPages || 1, `Minimum page number is ${minPages || 1}`)
      .max(
        maxPages || Infinity,
        `Maximum page number is ${maxPages || Infinity}`
      ),
  });

  const form = useForm<PageFormData>({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: yupResolver<PageFormData>(pageSchema),
  });

  console.log("form errors", form.formState.errors);

  return (
    <PrimaryForm
      onSubmit={onValid && form.handleSubmit(onValid)}
      {...(action && textInfo[action])}
      form={form}
      fieldsInfo={pageFormFieldsInfo}
    />
  );
};

export default PageForm;
