import { Box, Modal, ModalProps } from "@mui/material";
import React, { CSSProperties } from "react";

export interface MyModalProps extends ModalProps {}

export default function MyModal(props: MyModalProps) {
  const { children, open, onClose } = props;
  const style = {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  } as CSSProperties;
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>zzz{children}</Box>
    </Modal>
  );
}
