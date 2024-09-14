import { FlexBox } from "../atoms/FlexBox";
import { AccentedBtn } from "../atoms/Buttons";
import { BaseLink } from "../atoms/BaseLink";

const RegisterForm = () => {
  return (
    <FlexBox $fDirection="row" $gap="14px" $justify="start">
      <AccentedBtn>Registration</AccentedBtn>
      <BaseLink>Already have an account?</BaseLink>
    </FlexBox>
  );
};

export default RegisterForm;
