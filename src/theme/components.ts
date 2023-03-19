import { Components } from "@mui/material";
import { danger, info, neutral, primary, success, warning } from "./colors";
import { shadows } from "./shadows";

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    small: false;
    medium: false;
    large: false;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    "2xl": true;
  }
}
declare module "@mui/material/IconButton" {
  interface IconButtonPropsSizeOverrides {
    small: false;
    medium: false;
    large: false;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    "2xl": true;
  }
}

const objColor = {
  primary: primary,
  neutral: neutral,
  success: success,
  info: info,
  warning: warning,
  danger: danger,
};

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
    };
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
    };
};

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
    styleOverrides: {
      root: {
        marginTop: "16px",
        "& .MuiFormHelperText-root": {
          transform: "translate(-14px)",
          fontSize: "14px",
          marginTop: "6px",
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
  MuiInput: {
    defaultProps: {
      disableUnderline: true,
    },
    styleOverrides: {
      root: {
        "&:not([datatype='select-input'])": {
          backgroundColor: "#fff",
          border: `1px solid ${neutral[300]}`,
          borderRadius: "8px",
          height: "40px",
          padding: "8px 12px",
          width: "100%",
          transition: ".25s",
          "& ::placeholder": {
            color: neutral[500],
          },
          "&.Mui-focused": {
            border: `1px solid ${primary[300]}`,
            boxShadow: `0px 0px 0px 3px ${primary[100]}`,
          },
        },
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
};
