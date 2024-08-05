import { PaletteOptions } from "@mui/material/styles"
import { neutral, primary, danger, warning, success, info } from "./colors"

export const palette: PaletteOptions = {
  primary: {
    light: primary[400],
    main: primary[500],
    dark: primary[600],
  },
  error: {
    light: danger[400],
    main: danger[500],
    dark: danger[600],
  },
  warning: {
    light: warning[400],
    main: warning[500],
    dark: warning[600],
  },
  success: {
    light: success[400],
    main: success[500],
    dark: success[600],
  },
  info: {
    light: info[400],
    main: info[500],
    dark: info[600],
  },
  grey: {
    100: neutral[100],
    200: neutral[200],
    300: neutral[300],
    400: neutral[400],
    500: neutral[500],
    600: neutral[600],
    700: neutral[700],
    800: neutral[800],
    900: neutral[900],
  },
  text: {
    primary: neutral[700],
    secondary: neutral[500],
  },
}
