import { createTheme } from "@mui/material"
import { components } from "./components"
import { palette } from "./palette"
import { shadowsArray } from "./shadows"
import { typography } from "./typography"

export const theme = createTheme({
  typography: typography,
  palette: palette,
  shadows: shadowsArray,
  components: components,
  shape: {
    borderRadius: 8,
  },
})
