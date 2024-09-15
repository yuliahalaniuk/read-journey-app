import { FlexBox, FlexForm } from "../../../atoms/Flex";
import { AccentedBtn } from "../../../atoms/Buttons";
import { BaseLink } from "../../../atoms/BaseLink";
import FormInput from "../../../atoms/components/FormInput";
import {
  RegisterFormData,
  registerFormFieldsInfo,
} from "../../../data/formFieldsInfo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../../../validation-schemes/registerValidation";
import styled from "styled-components";

const RegisterForm = () => {
  const form = useForm<RegisterFormData>({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: yupResolver<RegisterFormData>(registrationSchema),
  });

  const onValid = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <Form $justify="start" onSubmit={form.handleSubmit(onValid)}>
      <FlexBox $gap="14px" style={{ flex: 1 }}>
        {registerFormFieldsInfo?.map((info) => {
          return <FormInput {...info} />;
        })}
      </FlexBox>

      <ButtonPairBox $fDirection="row">
        <AccentedBtn>Registration</AccentedBtn>
        <BaseLink>Already have an account?</BaseLink>
      </ButtonPairBox>
    </Form>
  );
};

const Form = styled(FlexForm)`
  height: 100%;
  max-width: 100%;
  gap: 20px;

  @media screen and (min-width: 768px) {
    max-width: 472px;
    gap: 82px;
  }
`;

const ButtonPairBox = styled(FlexBox)`
  gap: 14px;
  justify-content: start;

  @media screen and (min-width: 20px) {
    gap: 20px;
  }
`;

export default RegisterForm;
