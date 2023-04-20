import { Box, BoxProps, IconButton, ModalProps, Modal as MuiModal } from "@mui/material"
import { X } from "phosphor-react"
import React from "react"
import classes from "../styles/Modal.module.scss"
import { Header } from "./Header"
import { Body } from "./Body"
import { Footer } from "./Footer"

export interface IModalProps extends Omit<ModalProps, "children"> {
  children: React.ReactNode
  containerProps?: BoxProps
}
const Modal = ({ containerProps, ...props }: IModalProps) => {
  return (
    <MuiModal {...props}>
      <Box {...containerProps} className={classes.Container}>
        <IconButton className="btn-close" onClick={(e) => props?.onClose && props.onClose(e, "backdropClick")}>
          <X weight="bold" size="24" />
        </IconButton>
        <Box>{props?.children}</Box>
      </Box>
    </MuiModal>
  )
}

Modal.Header = Header
Modal.Body = Body
Modal.Footer = Footer
export default Modal
