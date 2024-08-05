import { info, neutral, primary } from "@/theme/ts/colors"
import { SxProps } from "@mui/material"

export function getStyles(
  disabled: boolean,
  onDropZone: boolean,
  file: File | null,
  isImage: boolean,
  imgSources: string | ArrayBuffer | null
): { root: SxProps; boxIconCloud: SxProps; label: SxProps; fileName: SxProps; stackBtn: SxProps } {
  return {
    root: {
      border: `1px solid ${neutral[300]}`,
      height: "185px",
      borderRadius: "8px",
      overflow: "hidden",
      backgroundColor: disabled ? neutral[100] : onDropZone ? primary[100] : file && !isImage ? "#f3f3f3" : "#fff",
      backgroundImage: `url(${imgSources})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    },
    boxIconCloud: {
      color: neutral[500],
      backgroundColor: neutral[100],
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "4px",
      boxSizing: "border-box",
      margin: "auto",
      marginBottom: "8px",
    },
    label: {
      fontWeight: 500,
      color: info[500],
      cursor: "pointer",
      "&:hover": { color: info[700] },
    },
    fileName: { position: "absolute", top: "10px", left: "10px" },
    stackBtn: {
      transform: isImage ? "translateY(0px)" : "translateY(-10px)",
    },
  }
}
