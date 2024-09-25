import { FlexBox, FlexForm } from "../../../atoms/Flex";
import { AccentedBtn, TransparentBtn } from "../../../atoms/Buttons";
import { BaseLink } from "../../../atoms/BaseLink";
import {
  LoginFormData,
  loginFormFieldsInfo,
} from "../../../data/formFieldsInfo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { logInSchema } from "../../../validation-schemes/logInValidation";
import { signInWithGoogle } from "../../../hooks/o_auth";
import { useAuth } from "../../../providers/AuthProvider";
import FormFields from "../../../atoms/components/FormFields";

const LogInForm = () => {
  const auth = useAuth();

  const form = useForm<LoginFormData>({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: yupResolver<LoginFormData>(logInSchema),
  });

  const onValid = (data: LoginFormData) => {
    console.log(data);

    auth.logInUser(data.email, data.password);
  };

  return (
    <Form
      $justify="start"
      onSubmit={form.handleSubmit(onValid)}
      style={{ flex: 1 }}
    >
      <FormFields
        form={form}
        fieldsInfo={loginFormFieldsInfo}
        containerStyles={{ flex: 1, gap: "14px" }}
      />

      <FlexBox $align="start" $gap="16px">
        <ButtonPairBox $fDirection="row">
          <AccentedBtn type="submit">Log in</AccentedBtn>

          <BaseLink href={"/register"}>{`Don’t have an account?`}</BaseLink>
        </ButtonPairBox>

        <TransparentBtn
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Log in with Google
        </TransparentBtn>
      </FlexBox>
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
