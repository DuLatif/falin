import { SxProps } from "@mui/material"

export const styles: { box: SxProps; label: SxProps; radio: SxProps } = {
  box: { marginLeft: "7px" },
  label: {
    "& span.MuiFormControlLabel-label": {
      marginLeft: "10px",
      fontWeight: 500,
      fontSize: { xs: "14px", md: "16px" },
    },
  },
  radio: {
    position: "relative",
    marginLeft: "5px",
    marginTop: "0px",
    "&:disabled": {
      pointerEvents: "none",
    },
  },
}

export const getStyles = (align: "center" | "top" | undefined) => {
  return {
    alignItems: align === "center" ? "center" : "flex-start",
    "& span.MuiRadio-root": {
      marginTop: align === "center" ? "0px" : "4px",
    },
    ...styles.label,
  }
}
