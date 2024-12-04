import React from "react";
import { FlexBox, FlexForm } from "../../atoms/FlexBox";
import { TransparentBtn } from "../../atoms/Buttons";
import FormFields, { FormFieldsProps } from "../../atoms/components/FormFields";
import { Title } from "./Forms.styled";

interface PrimaryFormProps extends FormFieldsProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onReset?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  btnText?: string;
}

const PrimaryForm: React.FC<PrimaryFormProps> = ({
  onSubmit,
  onReset,
  title,
  btnText,
  ...props
}) => {
  return (
    <FlexForm onSubmit={onSubmit} $align="start" $flex={1}>
      <Title>{title}</Title>
      <FormFields {...props} />

      <FlexBox $align="flex-start" $fDirection="row" $gap="12px">
        <TransparentBtn type="submit">{btnText}</TransparentBtn>
        {onReset && (
          <TransparentBtn type={"reset"} onClick={onReset}>
            {"Reset"}
          </TransparentBtn>
        )}
      </FlexBox>
    </FlexForm>
  );
};


export default PrimaryForm;
