import { SxProps } from "@mui/material"
import { danger, neutral } from "@/theme/ts/colors"

interface IStyle {
  root: SxProps
  error: SxProps
  disabled: SxProps
  label: SxProps
  btn: SxProps
}
export const styles: IStyle = {
  root: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    border: `1px solid ${neutral[300]}`,
    boxShadow: "0px 2px 2px rgba(218, 227, 225, 0.1), inset 0px -1px 1px rgba(218, 227, 225, 0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px",
    paddingLeft: "12px",
    cursor: "pointer",
    overflow: "hidden",
    margin: "6px auto",
    marginTop: "15px",
    marginBottom: "0px",
    height: "40px",
  },
  error: {
    border: `1px solid ${danger[300]}`,
  },
  disabled: {
    pointerEvents: "none",
  },
  label: {
    pointerEvents: "none",
    fontSize: "16px",
    marginTop: "4px",
  },
  btn: {
    boxShadow: "none",
    color: "#fff",
    borderRadius: "0px",
  },
}
