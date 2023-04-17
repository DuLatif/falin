import { neutral } from "@/theme/colors"
import { combineClasses } from "@/utils/styles"
import {
  Box,
  BoxProps,
  Button,
  IconButton,
  ModalProps,
  Modal as MuiModal,
  Stack,
  StackProps,
  Typography,
} from "@mui/material"
import { X } from "phosphor-react"
import React, { PropsWithChildren, ReactNode } from "react"
import Render from "../Render/Render"
import classes from "./_.module.scss"

type TColor = "neutral" | "primary" | "success" | "info" | "warning" | "error"
type TVariant = "contained" | "outlined"
interface IModalHeaderProps extends BoxProps {
  title?: string
  subtitle?: string
  divider?: boolean
  icon?: {
    icon: ReactNode
    variant: TVariant
    color: TColor
  }
}
const classColor: { [key in TColor]: string } = {
  neutral: classes.Neutral,
  primary: classes.Primary,
  success: classes.Success,
  info: classes.Info,
  warning: classes.Warning,
  error: classes.Error,
}
const classVariant: { [key in TVariant]: string } = {
  contained: classes.Contained,
  outlined: classes.Outlined,
}
const Header: React.FC<IModalHeaderProps> = ({ title, subtitle, icon, divider, ...props }) => {
  return (
    <Box {...props}>
      <Box className={combineClasses([classes.Modal_Header, divider && classes.Divider])}>
        <Render in={!!icon}>
          <Box
            className={combineClasses([
              classes.Modal_Icon,
              icon && classVariant[icon?.variant],
              icon && classColor[icon?.color],
            ])}
          >
            {icon?.icon}
          </Box>
        </Render>

        <Box>
          <Typography variant="subtitle2" fontWeight={"semiBold"} sx={{ color: neutral[900] }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: neutral[600] }}>
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

interface IModalBodyProps extends PropsWithChildren, BoxProps {}
const Body: React.FC<IModalBodyProps> = (props) => {
  return (
    <Box {...props}>
      <Box className={classes.Modal_Body}>{props.children}</Box>
    </Box>
  )
}

interface IModalFooterProps extends PropsWithChildren, StackProps {
  onCancel?: () => void
  divider?: boolean
}
const Footer: React.FC<IModalFooterProps> = ({ direction = "row", spacing = 1, onCancel, divider, ...props }) => {
  return (
    <Box className={combineClasses([classes.Modal_Footer, divider && classes.Divider])}>
      <Stack direction={direction} spacing={spacing} {...props}>
        <Render in={!!onCancel}>
          <Button variant="outlined" color="inherit" onClick={onCancel}>
            Cancel
          </Button>
        </Render>
        {props.children}
      </Stack>
    </Box>
  )
}

interface IModalProps extends Omit<ModalProps, "children"> {
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
