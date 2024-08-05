import { createTheme } from "@mui/material"
import { components } from "./ts/components"
import { palette } from "./ts/palette"
import { shadowsArray } from "./ts/shadows"
import { typography } from "./ts/typography"
import { spacing } from "./ts/spacing"

export const theme = createTheme({
  spacing: spacing,
  typography: typography,
  palette: palette,
  shadows: shadowsArray,
  components: components,
  shape: {
    borderRadius: 8,
  },
})
