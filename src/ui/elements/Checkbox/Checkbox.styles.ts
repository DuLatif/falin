import { SxProps } from "@mui/material"

export const styles: { box: SxProps; label: SxProps; checkbox: SxProps } = {
  box: { marginLeft: "7px" },
  label: {
    "& span.MuiFormControlLabel-label": {
      marginLeft: "10px",
      fontWeight: 500,
      fontSize: { xs: "14px", md: "16px" },
    },
  },
  checkbox: {
    position: "relative",
    marginLeft: "5px",
    marginTop: "0px",
    "&:disabled": {
      pointerEvents: "none",
    },
  },
}
