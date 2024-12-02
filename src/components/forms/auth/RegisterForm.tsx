import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import {
  RegisterFormData,
  registerFormFieldsInfo,
} from "../../../data/formFieldsInfo";
import { registrationSchema } from "../../../validation-schemes/registerValidation";
import { BaseLink } from "../../../atoms/BaseLink";
import { AccentedBtn } from "../../../atoms/Buttons";
import { FlexBox, FlexForm } from "../../../atoms/Flex";
import FormFields from "../../../atoms/components/FormFields";
import { useAppDispatch } from "../../../redux/store";
import { registerUserThunk } from "../../../redux/auth/auth.thunks";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<RegisterFormData>({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: yupResolver<RegisterFormData>(registrationSchema),
  });

  const onValid = async (data: RegisterFormData) => {
    if (data.email && data.password) {
      const action = await dispatch(registerUserThunk(data));
      if (registerUserThunk.fulfilled.match(action)) {
        navigate("/logIn");
      }
    }
  };

  return (
    <Form
      $justify="start"
      onSubmit={form.handleSubmit(onValid, (e) => {
        console.log("e", e);
      })}
    >
      <FormFields
        form={form}
        fieldsInfo={registerFormFieldsInfo}
        containerStyles={{ flex: 1, gap: "14px" }}
      />

      <ButtonPairBox $fDirection="row">
        <AccentedBtn type="submit">Registration</AccentedBtn>
        <BaseLink to="/login">Already have an account?</BaseLink>
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
