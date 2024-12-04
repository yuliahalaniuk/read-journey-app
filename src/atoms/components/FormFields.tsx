import React from "react";
import { FlexBox } from "../FlexBox";
import FormInput from "./FormInput";
import { FormFieldInfo } from "../../data/formFieldsInfo";

export interface FormFieldsProps {
  fieldsInfo: FormFieldInfo[];
  form?: any;
  containerStyles?: any;
}

const FormFields: React.FC<FormFieldsProps> = ({
  fieldsInfo,
  form,
  containerStyles,
}) => {
  return (
    <FlexBox
      $gap="8px"
      $fillWidth
      style={
        containerStyles
          ? containerStyles
          : {
              marginBottom: "20px",
            }
      }
    >
      {fieldsInfo.map((info) => {
        return (
          <FormInput
            key={info.name}
            {...info}
            form={form}
            errors={info.name && form?.formState.errors[info.name]}
          />
        );
      })}
    </FlexBox>
  );
};

export default FormFields;
