import React from "react";
import { Modal } from "react-bootstrap";

export default function ItemDetails({ show, onHide, itemComponent }) {
  return (
    <>
      <Modal
        show={show}
        onHide={() => onHide()}
        dialogClassName="modal-90w"
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        {itemComponent}
      </Modal>
    </>
  );
}
