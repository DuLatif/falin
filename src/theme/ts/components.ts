import { Components } from "@mui/material"
import { danger, info, neutral, primary, success, warning } from "./colors"
import { shadows } from "./shadows"
import { CaretDown } from "phosphor-react"

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    small: false
    medium: false
    large: false
    sm: true
    md: true
    lg: true
    xl: true
    "2xl": true
  }
}
declare module "@mui/material/IconButton" {
  interface IconButtonPropsSizeOverrides {
    small: false
    medium: false
    large: false
    sm: true
    md: true
    lg: true
    xl: true
    "2xl": true
  }
}

const objColor = {
  primary: primary,
  neutral: neutral,
  success: success,
  info: info,
  warning: warning,
  danger: danger,
}

const fnBtnColorStyle = (
  color: "primary" | "neutral" | "success" | "info" | "warning" | "danger",
  variant: "contained" | "text"
) => {
  if (variant === "contained")
    return {
      color: "#fff",
      background: objColor[color][600],
      ":hover": {
        background: objColor[color][700],
      },
      ":focus": {
        boxShadow: `0px 0px 0px 4px ${objColor[color][100]}`,
      },
      ":disabled": {
        background: objColor[color][200],
        color: "#fff",
      },
    }
  if (variant === "text")
    return {
      background: objColor[color][50],
      ":hover": {
        background: objColor[color][100],
      },
      ":focus": {
        background: objColor[color][50],
        boxShadow: `0px 0px 0px 4px ${objColor[color][100]}`,
      },
      ":disabled": {
        background: "none",
        color: objColor[color][300],
      },
    }
}

export const components: Components = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
      size: "md",
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        borderRadius: "8px",
        textTransform: "capitalize",
        fontWeight: 600,

        "&[data-shape='icon']": {
          minWidth: "0px",
          padding: "0px !important",
          "& span.MuiCircularProgress-root": {
            height: "18px !important",
            width: "18px !important",
          },
        },

        "& span.MuiCircularProgress-root": {
          height: "24px !important",
          width: "24px !important",
        },

        // --- size sm ---
        "&.MuiButton-sizeSm": {
          height: "36px",
          fontSize: "14px",
          padding: "8px 14px",
          "&[data-shape='icon']": {
            height: "36px",
            width: "36px",
            "& svg": {
              width: "17px",
            },
          },
        },
        // --- size md ---
        "&.MuiButton-sizeMd": {
          height: "40px",
          fontSize: "14px",
          padding: "10px 16px",
          "&[data-shape='icon']": {
            height: "40px",
            width: "40px",
            "& svg": {
              width: "17px",
            },
          },
        },
        // --- size lg ---
        "&.MuiButton-sizeLg": {
          height: "44px",
          fontSize: "16px",
          padding: "10px 18px",
          "&[data-shape='icon']": {
            height: "44px",
            width: "44px",
            "& svg": {
              width: "17px",
            },
          },
        },
        // --- size xl ---
        "&.MuiButton-sizeXl": {
          height: "48px",
          fontSize: "16px",
          padding: "12px 20px",
          "&[data-shape='icon']": {
            height: "48px",
            width: "48px",
            "& svg": {
              width: "17px",
            },
          },
        },
        // --- size 2xl ---
        "&.MuiButton-size2xl": {
          height: "60px",
          fontSize: "18px",
          padding: "16px 28px",
          "&[data-shape='icon']": {
            height: "56px",
            width: "56px",
            "& svg": {
              width: "20px",
            },
          },
        },
      },

      containedPrimary: fnBtnColorStyle("primary", "contained"),
      textPrimary: fnBtnColorStyle("primary", "text"),
      containedInfo: fnBtnColorStyle("info", "contained"),
      textInfo: fnBtnColorStyle("info", "text"),
      containedSuccess: fnBtnColorStyle("success", "contained"),
      textSuccess: fnBtnColorStyle("success", "text"),
      containedWarning: fnBtnColorStyle("warning", "contained"),
      textWarning: fnBtnColorStyle("warning", "text"),
      containedError: fnBtnColorStyle("danger", "contained"),
      textError: fnBtnColorStyle("danger", "text"),
      containedInherit: fnBtnColorStyle("neutral", "contained"),
      textInherit: fnBtnColorStyle("neutral", "text"),
    },
  },
  MuiCircularProgress: {
    defaultProps: {
      disableShrink: true,
      color: "inherit",
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        padding: "20px 16px",
        boxShadow: shadows.lg,
      },
    },
  },
  MuiFormControl: {
    defaultProps: {
      fullWidth: true,
    },
    styleOverrides: {
      root: {
        marginTop: "16px",
        "& .MuiFormHelperText-root": {
          transform: "translate(-14px)",
          fontSize: "14px",
          marginTop: "6px",
        },
        "&.Mui-error": {
          "& fieldset,& fieldset:hover": {
            border: `1px solid ${danger[300]}`,
          },
        },
      },
    },
  },
  MuiInputLabel: {
    defaultProps: {
      shrink: true,
    },
    styleOverrides: {
      root: {
        marginBottom: "4px",
        color: "inherit",
        "& .MuiFormLabel-asterisk": {
          color: danger[400],
        },
      },
      shrink: {
        fontSize: "14px",
        transform: "scale(1) translate(0px, -8px)",
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontSize: "14px",
        marginBottom: "4px",
        color: "inherit",
        "& .MuiFormLabel-asterisk": {
          color: danger[400],
        },
      },
    },
  },
  MuiInput: {
    defaultProps: {
      disableUnderline: true,
    },
    styleOverrides: {
      root: {
        backgroundColor: "#fff",
        border: `1px solid ${neutral[300]}`,
        borderRadius: "8px",
        height: "40px",
        padding: "8px 12px",
        width: "100%",
        transition: ".25s",
        "&::placeholder": {
          color: neutral[500],
        },
        "&.Mui-focused": {
          border: `1px solid ${primary[300]}`,
          boxShadow: `0px 0px 0px 3px ${primary[100]}`,
        },
        "&:not([datatype='select-input'])": {},
        "&.Mui-error": {
          border: `1px solid ${danger[300]}`,
          "& svg": {
            color: danger[500],
          },
          "&.Mui-focused": {
            border: `1px solid ${danger[300]}`,
            boxShadow: `0px 0px 0px 3px ${danger[100]}`,
          },
        },
        "&.MuiInputBase-multiline": {
          height: "auto",
        },
        "& svg.MuiSelect-icon": {
          fontSize: "20px",
          right: "12px",
          "& polyline": {
            strokeWidth: "20px",
          },
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        "&[datatype='select-input']": {
          marginTop: "0px",
        },
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        "&.MuiFormControlLabel-label": {
          fontWeight: 400,
        },
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: "12px",
      },
      filled: {
        color: "#fff",
      },
      filledError: {
        background: danger[500],
      },
      filledWarning: {
        background: warning[500],
      },
      filledInfo: {
        background: info[500],
      },
      filledSuccess: {
        background: success[500],
      },
      outlinedError: {
        border: `1px solid ${danger[300]}`,
        color: danger[700],
      },
      outlinedWarning: {
        border: `1px solid ${warning[300]}`,
        color: warning[700],
      },
      outlinedInfo: {
        border: `1px solid ${info[300]}`,
        color: info[700],
      },
      outlinedSuccess: {
        border: `1px solid ${success[300]}`,
        color: success[700],
      },
    },
  },
  MuiAlertTitle: {
    styleOverrides: {
      root: {
        fontWeight: 600,
      },
    },
  },
  MuiTooltip: {
    defaultProps: {
      arrow: true,
      placement: "top",
    },
    styleOverrides: {
      tooltip: {
        padding: "8px 12px",
        background: "#fff",
        color: neutral[500],
        boxShadow: shadows.lg,
        borderRadius: "8px",
      },
      arrow: {
        color: "#fff",
      },
    },
  },
  MuiSelect: {
    defaultProps: {
      variant: "standard",
      disableUnderline: true,
      datatype: "select-input",
      MenuProps: {
        PaperProps: {
          className: "select-dropdown",
        },
      },
      IconComponent: CaretDown,
    },
    styleOverrides: {
      standard: {
        ":focus": {
          backgroundColor: "#fff",
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        "&.MuiCard-root": {
          overflow: "initial",
        },
        "&.select-dropdown": {
          padding: "4px 10px",
          border: "1px solid #EAECF0",
          boxShadow: "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
          borderRadius: "8px",
        },
        "&.select-dropdown ul": {
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        },
        "&.select-dropdown li.MuiMenuItem-root": {
          borderRadius: "6px",
          height: "44px",
          padding: "0px 20px",
          "&:active": {
            backgroundColor: primary[200],
          },
        },
        "&.select-dropdown li.MuiMenuItem-root[data-value=' ']": {
          display: "none",
        },
        "&.date-picker__paper": {
          boxShadow: shadows.lg,
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      sizeMedium: {
        padding: "2px 0px",
        fontSize: "14px",
        fontWeight: 500,
      },
      sizeSmall: {
        fontSize: "12px",
      },
      outlined: {
        borderWidth: "2px",
        borderColor: neutral[700],
        color: neutral[700],
      },
      outlinedPrimary: {
        borderColor: primary[700],
        color: primary[700],
      },
      filled: {
        background: neutral[100],
        color: neutral[700],
      },
      filledPrimary: {
        background: primary[50],
        color: primary[700],
      },
      colorError: {
        "&.MuiChip-filled": {
          background: danger[50],
          color: danger[700],
        },
        "&.MuiChip-outlined": {
          borderColor: danger[700],
          color: danger[700],
        },
      },
      colorSuccess: {
        "&.MuiChip-filled": {
          background: success[50],
          color: success[700],
        },
        "&.MuiChip-outlined": {
          borderColor: success[700],
          color: success[700],
        },
      },
      colorInfo: {
        "&.MuiChip-filled": {
          background: info[50],
          color: info[700],
        },
        "&.MuiChip-outlined": {
          borderColor: info[700],
          color: info[700],
        },
      },
      colorWarning: {
        "&.MuiChip-filled": {
          background: warning[50],
          color: warning[700],
        },
        "&.MuiChip-outlined": {
          borderColor: warning[700],
          color: warning[700],
        },
      },
    },
  },
  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
    },
    styleOverrides: {
      root: {
        "& .MuiPaper-root": {
          background: "#fff",
          color: neutral[700],
        },
      },
    },
  },
  MuiModal: {
    styleOverrides: {
      root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& > .MuiBox-root": {
          position: "relative",
          background: "#fff",
          boxShadow: "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
          minWidth: "320px",
          width: "100%",
          maxWidth: "900px",
          minHeight: "100px",
          borderRadius: "12px",
          outline: "none",
        },
        "& .btn-close": {
          position: "absolute",
          right: "12px",
          top: "12px",
        },
      },
    },
  },
  MuiBackdrop: {
    styleOverrides: {
      root: {
        "&.modal-backdrop": {
          backgroundImage: "linear-gradient(to bottom, rgba(52, 64, 84, 0.4), rgba(52, 64, 84, 0.6))",
          backdropFilter: "blur(1px)",
        },
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        "& .MuiTableRow-root .MuiTableCell-root": {
          color: neutral[700],
          fontSize: "12px",
          borderTop: `1px solid ${neutral[200]}`,
        },
      },
    },
  },
  MuiTableBody: {
    styleOverrides: {
      root: {
        "& .MuiTableRow-root .MuiTableCell-root": {
          color: neutral[700],
        },
        "& .MuiTableRow-root .MuiTableCell-root svg": {
          width: "17px",
        },
        "&.hoverable .MuiTableRow-root:hover": {
          backgroundColor: info[50],
          cursor: "pointer",
          "& .MuiTableCell-root": {
            color: neutral[900],
          },
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        fontWeight: 500,
        fontSize: "14px",
        height: "54px",
        padding: "0px 16px",
        borderBottom: `1px solid ${neutral[200]}`,
        "& a": {
          color: neutral[700],
        },
        "& .MuiIconButton-root.MuiButtonBase-root": {
          width: "28px",
          height: "28px",
          padding: "0",
          borderRadius: "4px",
          "& svg": {
            color: neutral[500],
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(.9)",
          },
        },
        "& .MuiIconButton-root.MuiButtonBase-root:hover": {
          background: info[100],
          "& svg": {
            color: info[500],
          },
        },
      },
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        "&.Mui-selected": {
          color: primary[500],
          background: primary[50],
          fontWeight: 500,
          pointerEvents: "none",
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        // ---- style overrides for input date ----
        "&.date-picker": {
          "& .MuiInputBase-root.MuiOutlinedInput-root": {
            backgroundColor: "#fff",
            borderRadius: "8px",
            height: "40px",
            padding: "8px 12px",
            width: "100%",
            transition: ".25s",
            fontSize: "16px",
            "&::placeholder": {
              color: neutral[500],
            },
            "& input": {
              paddingLeft: 0,
            },
            "&.Mui-focused": {
              border: `1px solid ${primary[300]}`,
              boxShadow: `0px 0px 0px 3px ${primary[100]}`,
              "& fieldset,&:hover fieldset": {
                border: "none",
              },
            },
            "&:hover fieldset": {
              border: `1px solid ${neutral[300]}`,
            },
            "& button svg": {
              fontSize: "20px",
              marginRight: "6px",
              "& polyline": {
                strokeWidth: "20px",
              },
            },
          },
        },
      },
    },
  },
}
