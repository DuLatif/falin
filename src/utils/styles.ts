import { SxProps } from "@mui/material"

export const appendStyle = (styleProps: SxProps) => {
  return [...(Array.isArray(styleProps) ? styleProps : [styleProps])]
}

export const combineClasses = (classes: (CSSModuleClasses | string | boolean | undefined)[]): string => {
  return classes.join(" ")
}
