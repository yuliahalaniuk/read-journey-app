import InputSecurityControlHOC from "../../components/HOC/SecurityInputControl";
import { FlexBox } from "../Flex";
import { ErrorText, LabelContainer, StLabel, StyledInput } from "../StInput";

const FormInput = ({
  label,
  name,
  register,
  errors,
  required,
  canBeHidden,
  placeholder,
}: {
  label?: string;
  name?: string;
  register?: any;
  errors?: Record<string, any>;
  required?: boolean;
  placeholder?: string;
  canBeHidden?: boolean;
}) => {
  return (
    <FlexBox $gap="4px">
      <LabelContainer
        $justify={"space-between"}
        $gap="10px"
        $errors={!!errors}
        $hasRightPadding={canBeHidden}
      >
        <FlexBox $fDirection="row" $gap="10px">
          <StLabel htmlFor={name}>{label}</StLabel>
          {canBeHidden ? (
            <InputSecurityControlHOC
              renderInput={({ type, placeholder }) => (
                <StyledInput
                  id={name}
                  type={type}
                  placeholder={placeholder}
                  {...register(name, { required })}
                />
              )}
              htmlType="text"
              // placeholder={`Enter your ${label?.toLowerCase()}`}
              name={name}
            />
          ) : (
            <StyledInput
              id={name}
              type="text"
              placeholder={placeholder}
              // placeholder={`Enter your ${label?.toLowerCase()}`}
              {...register(name, { required })}
            />
          )}
        </FlexBox>
      </LabelContainer>

      {errors && <ErrorText>{errors?.message} </ErrorText>}
    </FlexBox>
  );
};

export default FormInput;
