import React from "react";
import Modal from "../../atoms/Modal";
import PageForm, { ActionType } from "../forms/PageForm";
import { PageFormData } from "../../data/formFieldsInfo";

const PageModal = (props: {
  action: ActionType;
  onValid?: (d: PageFormData) => void;
  onClose?: () => void;
  btnOnClick?: () => void;
}) => {
  return (
    <Modal.Backdrop>
      <Modal.Body $sizeType="s">
        <Modal.CloseBtn onClick={props.onClose}>X</Modal.CloseBtn>

        <PageForm {...props} />
      </Modal.Body>
    </Modal.Backdrop>
  );
};

export default PageModal;
