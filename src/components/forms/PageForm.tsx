import { PageFormData } from "../../data/formFieldsInfo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PrimaryForm from "./PrimaryForm";
import * as yup from "yup";

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
      .min(minPages || 0, `Minimum page number is ${minPages || 0}`)
      .max(
        maxPages || Infinity,
        `Maximum page number is ${maxPages || Infinity}`
      ),
  });

  const form = useForm<PageFormData>({
    reValidateMode: "onSubmit",
    resolver: yupResolver<PageFormData>(pageSchema),
  });

  const inputProps = {
    name: "page",
    label: "Page number",
    required: false,
    ...(action === "start" ? { value: String(minPages) } : null),
  };

  return (
    <PrimaryForm
      onSubmit={form.handleSubmit(
        (data) => {
          onValid?.({ page: Number(data.page) });
        },
        (errors) => {
          // console.log("Page Form submission errors:", errors);
        }
      )}
      {...(action && textInfo[action])}
      form={form}
      fieldsInfo={[inputProps]}
    />
  );
};

export default PageForm;
