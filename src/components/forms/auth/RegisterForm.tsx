import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  RegisterFormData,
  registerFormFieldsInfo,
} from "../../../data/formFieldsInfo";
import { registrationSchema } from "../../../validation-schemes/registerValidation";
import { BaseLink } from "../../../atoms/BaseLink";
import { AccentedBtn } from "../../../atoms/Buttons";
import FormFields from "../../../atoms/components/FormFields";
import { useAppDispatch } from "../../../redux/store";
import { registerUserThunk } from "../../../redux/auth/auth.thunks";
import { useNavigate } from "react-router-dom";
import { ButtonPairBox, Form } from "../Forms.styled";
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
      dispatch(
        registerUserThunk({
          args: data,
          onSuccess: () => {
            navigate("/logIn");
          },
        })
      );
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




export default RegisterForm;
