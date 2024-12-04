import React, { ReactNode } from "react";
import { FlexBox } from "../../../atoms/FlexBox";
import { TextWithAccent } from "../../../atoms/Text";
import { ModalTitle } from "./Modals.styled";

const SmallModal = ({
  title,
  text,
  imgSrc = "/images/iphone.png",
}: {
  title?: string;
  text?: ReactNode;
  $primaryText?: boolean;
  imgSrc?: string;
}) => {
  return (
    <>
      <FlexBox $margin="18px" $align="center">
        <img src={imgSrc} alt={"test"} width={70} height={70} />
      </FlexBox>

      <ModalTitle>{title}</ModalTitle>
      <TextWithAccent $primary={false}>{text}</TextWithAccent>
    </>
  );
};



export default SmallModal;
