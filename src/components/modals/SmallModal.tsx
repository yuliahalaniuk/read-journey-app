import React, { ReactNode } from "react";
import Modal from "../../atoms/Modal";
import { FlexBox } from "../../atoms/Flex";
import styled from "styled-components";

const SmallModal = ({ title, text }: { title?: string; text?: ReactNode }) => {
  return (
    <Modal.Backdrop>
      <Modal.Body $sizeType="s">
        <Modal.CloseBtn>X</Modal.CloseBtn>

        <FlexBox style={{ margin: "18px" }}>
          <img src="/images/iphone.png" alt={"test"} width={140} height={213} />
        </FlexBox>

        <Title>{title}</Title>
        <MainText>{text}</MainText>
      </Modal.Body>
    </Modal.Backdrop>
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

const MainText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(p) => p.theme.text.secondary};

  span {
    color: ${(p) => p.theme.text.main};
  }
`;
export default SmallModal;
