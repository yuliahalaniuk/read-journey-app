import React, { ReactNode } from "react";
import { FlexBox } from "../../../atoms/Flex";
import styled from "styled-components";
import { TextWithAccent } from "../../../atoms/Text";

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
      <FlexBox style={{ margin: "18px" }}>
        <img src={imgSrc} alt={"test"} width={70} height={70} />
      </FlexBox>

      <Title>{title}</Title>
      <TextWithAccent $primary={false}>{text}</TextWithAccent>
    </>
  );
};

const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  text-align: center;

  color: ${(p) => p.theme.text.main};
  margin-bottom: 10px;
  text-align: center;
`;

export default SmallModal;
