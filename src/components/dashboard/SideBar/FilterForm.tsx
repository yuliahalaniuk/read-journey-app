import React from "react";
import styled from "styled-components";
import {
  FilterFormData,
  filterFormFieldsInfo,
} from "../../../data/formFieldsInfo";
import FormInput from "../../../atoms/components/FormInput";
import { TransparentBtn } from "../../../atoms/Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { filterSchema } from "../../../validation-schemes/filterValidation";
import { FlexBox, FlexForm } from "../../../atoms/Flex";

const FilterForm = () => {
  const form = useForm<FilterFormData>({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: yupResolver<FilterFormData>(filterSchema),
  });

  const onValid = (data: FilterFormData) => {
    console.log(data);
  };

  return (
    <FlexForm onSubmit={form.handleSubmit(onValid)} $align="start">
      <Title>Filters:</Title>

      <FlexBox
        $gap="8px"
        style={{
          marginBottom: "20px",
        }}
      >
        {filterFormFieldsInfo.map((info) => {
          return <FormInput key={info?.name} {...info} />;
        })}
      </FlexBox>

      <TransparentBtn>Apply</TransparentBtn>
    </FlexForm>
  );
};

const Title = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  padding-left: 14px;

  margin-bottom: 8px;
  color: ${(p) => p.theme.text.main};
`;

export default FilterForm;
