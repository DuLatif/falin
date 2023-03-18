import { Components } from "@mui/material";
import { shadows } from "./shadows";

export const components: Components = {
  MuiCard: {
    styleOverrides: {
      root: {
        padding: "20px 16px",
        boxShadow: shadows.lg,
      },
    },
  },
};
