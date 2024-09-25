import React from "react";
import Modal from "../../atoms/Modal";
import { FlexBox } from "../../atoms/Flex";
import styled from "styled-components";
import { TransparentBtn } from "../../atoms/Buttons";

const BookModal = ({
  name = "Hi hi",
  subtext = "ahaha",
  pages = "412 pages",
  btnOnClick,
  btnText = "Submit",
}: {
  name?: string;
  pages?: string;
  subtext?: string;
  btnOnClick?: () => void;
  btnText?: string;
}) => {
  return (
    <Modal.Backdrop>
      <Modal.Body $sizeType="m">
        <Modal.CloseBtn>X</Modal.CloseBtn>

        <FlexBox style={{ margin: "18px" }}>
          <img src="/images/iphone.png" alt={name} width={140} height={213} />
        </FlexBox>

        <FlexBox style={{ margin: "20px" }}>
          <NameText>{name}</NameText>
          <SubText>{subtext}</SubText>
          <PagesText>{pages}</PagesText>
        </FlexBox>

        <TransparentBtn onClick={btnOnClick}>{btnText}</TransparentBtn>
      </Modal.Body>
    </Modal.Backdrop>
  );
};

const NameText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.text.main};
  margin-bottom: 2px;
  text-align: center;
`;

const SubText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.text.secondary};
  text-align: center;

  margin-bottom: 4px;
`;

const PagesText = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(p) => p.theme.text.main};
  text-align: center;
`;

export default BookModal;
