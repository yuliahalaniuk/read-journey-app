import React from "react";
import { FlexBox } from "../FlexBox";
import styled from "styled-components";

const FormInput = ({
  label,
  id,
  register,
  errors = true,
}: {
  label?: string;
  id?: string;
  register?: any;
  errors?: any;
}) => {
  return (
    <FlexBox $gap="4px">
      <LabelContainer
        $fDirection="row"
        $justify={"space-between"}
        $gap="10px"
        $errors={true}
      >
        <FlexBox $fDirection="row" $gap="10px">
          <StLabel htmlFor={id}>{label}</StLabel>
          <StyledInput id={id} {...register} />
        </FlexBox>

        {errors && <div>NO</div>}
      </LabelContainer>
      {errors && <ErrorText>Not found</ErrorText>}
    </FlexBox>
  );
};

export const ErrorText = styled.p`
  width: 100%;
  color: ${(p) => p.theme.colors.error};
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  padding-inline: 14px;
  text-align: left;
`;

export const LabelContainer = styled(FlexBox)<{ $errors?: boolean }>`
  background-color: ${(p) => p.theme.background.input};
  border-radius: ${(p) => p.theme.borderRadius.input};

  border: 1px solid ${(p) => (p.$errors ? p.theme.colors.error : "transparent")};
  padding: 14px;

  @media screen and (min-width: 768px) {
    padding: 16px 14px;
  }
`;

export const StLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.text.secondary};
`;

export const StyledInput = styled.input`
  width: 100%;
  min-width: 100px;

  background-color: transparent;
  color: ${(p) => p.theme.text.main};

  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  letter-spacing: -0.02em;

  @media screen and (min-width: 1280px) {
    font-size: 14px;
  }
`;

export default FormInput;
