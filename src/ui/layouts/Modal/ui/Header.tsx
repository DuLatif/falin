import { neutral } from "@/theme/ts/colors"
import { combineClasses } from "@/utils/styles"
import { Box, BoxProps, Typography } from "@mui/material"
import React, { ReactNode } from "react"
import classes from "../styles/Modal.module.scss"
import { TVariant, TColor, classVariant, classColor } from "../utils/colorVariant"
import Render from "@/ui/elements/Render"

export interface IModalHeaderProps extends BoxProps {
  title?: string
  subtitle?: string
  divider?: boolean
  icon?: {
    icon: ReactNode
    variant: TVariant
    color: TColor
  }
}
export const Header: React.FC<IModalHeaderProps> = ({ title, subtitle, icon, divider, ...props }) => {
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
