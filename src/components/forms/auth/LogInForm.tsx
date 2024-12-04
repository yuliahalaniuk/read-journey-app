import { FlexBox } from "../../../atoms/FlexBox";
import { AccentedBtn } from "../../../atoms/Buttons";
import { BaseLink } from "../../../atoms/BaseLink";
import {
  LoginFormData,
  loginFormFieldsInfo,
} from "../../../data/formFieldsInfo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { logInSchema } from "../../../validation-schemes/logInValidation";
import FormFields from "../../../atoms/components/FormFields";
import { useAppDispatch } from "../../../redux/store";
import {
  logInUserThunk,
  signInWithGoogleThunk,
} from "../../../redux/auth/auth.thunks";
import { ButtonPairBox, Form } from "../Forms.styled";

const LogInForm = () => {
  const dispatch = useAppDispatch();

  const form = useForm<LoginFormData>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver<LoginFormData>(logInSchema),
  });

  const onValid = (data: LoginFormData) => {
    dispatch(logInUserThunk({ args: data }));
  };

  const handleLogInWithGoogle = () => {
    dispatch(signInWithGoogleThunk({ args: {} }));
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

          <AccentedBtn onClick={handleLogInWithGoogle}>
            Log in with Google
          </AccentedBtn>
        </ButtonPairBox>

        <BaseLink to={"/register"}>{`Don’t have an account?`}</BaseLink>
      </FlexBox>
    </Form>
  );
};

export default LogInForm;
