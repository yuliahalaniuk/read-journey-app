import React, { HTMLInputTypeAttribute, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import EyeOpenIcon from "../../assets/EyeOpenIcon";
import EyeClosedIcon from "../../assets/EyeClosedIcon";
import { SecurityButton } from "./HOC.styled";

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

      <SecurityButton onClick={handleVisibility} type="button">
        {isVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
      </SecurityButton>
    </>
  );
};

export default InputSecurityControlHOC;
