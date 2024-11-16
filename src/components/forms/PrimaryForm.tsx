import React from "react";
import { FlexForm } from "../../atoms/Flex";
import styled from "styled-components";
import { TransparentBtn } from "../../atoms/Buttons";
import FormFields, { FormFieldsProps } from "../../atoms/components/FormFields";

interface PrimaryFormProps extends FormFieldsProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  title?: string;
  btnText?: string;
}

const PrimaryForm: React.FC<PrimaryFormProps> = ({
  onSubmit,
  title,
  btnText,
  ...props
}) => {
  return (
    <FlexForm onSubmit={onSubmit} $align="start" style={{ flex: 1 }}>
      <Title>{title}</Title>

      <FormFields {...props} />

      <TransparentBtn type="submit">{btnText}</TransparentBtn>
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
