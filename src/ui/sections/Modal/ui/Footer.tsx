import Render from "@/ui/elements/Render"
import { combineClasses } from "@/utils/styles"
import { Box, Button, Stack, StackProps } from "@mui/material"
import React, { PropsWithChildren } from "react"
import classes from "../styles/Modal.module.scss"

export interface IModalFooterProps extends PropsWithChildren, StackProps {
  onCancel?: () => void
  divider?: boolean
}
export const Footer: React.FC<IModalFooterProps> = (rootProps) => {
  const { direction = "row", spacing = 1, onCancel, divider, ...props } = rootProps

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
