import classes from "../styles/Modal.module.scss"

export type TColor = "neutral" | "primary" | "success" | "info" | "warning" | "error"
export type TVariant = "contained" | "outlined"
export const classColor: {
  [key in TColor]: string
} = {
  neutral: classes.Neutral,
  primary: classes.Primary,
  success: classes.Success,
  info: classes.Info,
  warning: classes.Warning,
  error: classes.Error,
}
export const classVariant: {
  [key in TVariant]: string
} = {
  contained: classes.Contained,
  outlined: classes.Outlined,
}
