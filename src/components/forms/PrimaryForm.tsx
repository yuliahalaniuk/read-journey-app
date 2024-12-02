import React from "react";
import { FlexBox, FlexForm } from "../../atoms/Flex";
import styled from "styled-components";
import { TransparentBtn } from "../../atoms/Buttons";
import FormFields, { FormFieldsProps } from "../../atoms/components/FormFields";

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
    <FlexForm onSubmit={onSubmit} $align="start" style={{ flex: 1 }}>
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

const Title = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  padding-left: 14px;

  margin-bottom: 8px;
  color: ${(p) => p.theme.text.main};
`;
export default PrimaryForm;
