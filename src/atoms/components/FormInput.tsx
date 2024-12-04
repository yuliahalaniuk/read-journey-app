import { useEffect } from "react";
import InputSecurityControlHOC from "../../components/HOC/SecurityInputControl";
import { FlexBox } from "../FlexBox";
import { ErrorText, LabelContainer, StLabel, StyledInput } from "../StInput";

const FormInput = ({
  label,
  name,
  form,
  errors,
  required,
  canBeHidden,
  placeholder,
  value,
}: {
  label?: string;
  name?: string;
  form: any;
  errors?: any;
  required?: boolean;
  placeholder?: string;
  canBeHidden?: boolean;
  value?: string;
}) => {
  useEffect(() => {
    form.setValue(name, value);
  }, [form, name, value]);

  const fieldValue = form.watch(name);

  return (
    <FlexBox $gap="4px" $fillWidth>
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
                  {...form.register(name, { required })}
                  value={value}
                  disabled={!!value}
                />
              )}
              htmlType="text"
              name={name}
            />
          ) : (
            <StyledInput
              id={name}
              type="text"
              placeholder={placeholder}
              {...form.register(name, { required })}
              value={fieldValue}
              disabled={!!value}
              onChange={(e) => form.setValue(name, e.target.value)}
            />
          )}
        </FlexBox>
      </LabelContainer>

      {errors && <ErrorText>{errors?.message} </ErrorText>}
    </FlexBox>
  );
};

export default FormInput;
