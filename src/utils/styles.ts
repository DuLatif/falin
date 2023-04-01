import { SxProps } from "@mui/material"

export const appendStyle = (styleProps: SxProps) => {
  return [...(Array.isArray(styleProps) ? styleProps : [styleProps])]
}
