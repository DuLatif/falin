import { Box, BoxProps } from "@mui/material"
import React, { PropsWithChildren } from "react"
import classes from "../styles/Modal.module.scss"

export interface IModalBodyProps extends PropsWithChildren, BoxProps {}
export const Body: React.FC<IModalBodyProps> = (props) => {
  return (
    <Box {...props}>
      <Box className={classes.Modal_Body}>{props.children}</Box>
    </Box>
  )
}
