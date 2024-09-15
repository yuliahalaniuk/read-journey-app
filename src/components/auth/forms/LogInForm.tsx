import { FlexBox, FlexForm } from "../../../atoms/Flex";
import { AccentedBtn } from "../../../atoms/Buttons";
import { BaseLink } from "../../../atoms/BaseLink";
import FormInput from "../../../atoms/components/FormInput";
import {
  LoginFormData,
  loginFormFieldsInfo,
} from "../../../data/formFieldsInfo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { logInSchema } from "../../../validation-schemes/logInValidation";

const LogInForm = () => {
  const form = useForm<LoginFormData>({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: yupResolver<LoginFormData>(logInSchema),
  });

  const onValid = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <Form $justify="start" onSubmit={form.handleSubmit(onValid)}>
      <FlexBox $gap="14px">
        {loginFormFieldsInfo?.map((info) => {
          return <FormInput {...info} />;
        })}
      </FlexBox>

      <ButtonPairBox $fDirection="row">
        <AccentedBtn>Log in</AccentedBtn>
        <BaseLink>{`Don’t have an account?`}</BaseLink>
      </ButtonPairBox>
    </Form>
  );
};

const Form = styled(FlexForm)`
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

export default LogInForm;
