import { PageFormData, pageFormFieldsInfo } from "../../data/formFieldsInfo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PrimaryForm from "./PrimaryForm";
import { pageSchema } from "../../validation-schemes/pageValidation";

// const onValid = (data: PageFormData) => {
//   console.log(data);
// };

type ActionType = "start" | "stop";

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
}: {
  action: ActionType;
  onValid: (d: PageFormData) => void;
}) => {
  const form = useForm<PageFormData>({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: yupResolver<PageFormData>(pageSchema),
  });

  return (
    <PrimaryForm
      onSubmit={form.handleSubmit(onValid)}
      {...(action && textInfo[action])}
      form={form}
      fieldsInfo={pageFormFieldsInfo}
    />
  );
};

export default PageForm;
