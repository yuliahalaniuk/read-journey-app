import React, { HTMLInputTypeAttribute, useState } from "react";
import styled from "styled-components";
import { UseFormReturn } from "react-hook-form";
import { BaseButton } from "../../atoms/Buttons";
import EyeOpenIcon from "../../assets/EyeOpenIcon";
import EyeClosedIcon from "../../assets/EyeClosedIcon";

const InputSecurityControlHOC = ({
  children,
  renderInput,
  htmlType = "text",
  placeholder,
  name,
  form,
}: {
  htmlType?: HTMLInputTypeAttribute;
  renderInput?: (props: {
    type: HTMLInputTypeAttribute;
    iconPosition?: "left" | "right";
    placeholder?: string;
    name?: string;
    form?: UseFormReturn<FormData | any | undefined>;
  }) => React.ReactNode;
  children?: React.ReactNode;
  placeholder?: string;
  registerName?: string;
  name?: string;
  form?: UseFormReturn<FormData | any | undefined>;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible((p) => !p);
  };

  return (
    <>
      {renderInput
        ? renderInput({
            type: !isVisible ? "password" : htmlType,
            iconPosition: "right",
            placeholder: placeholder,
            name: name,
            form: form,
          })
        : children}

      <SecurityButton onClick={handleVisibility}>
        {isVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
      </SecurityButton>
    </>
  );
};

const SecurityButton = styled(BaseButton)`
  position: absolute;
  right: 0;
  padding: 14px;
  top: 50%;
  transform: translateY(-50%);
`;

export default InputSecurityControlHOC;
