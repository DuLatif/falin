import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface TypographyOptions {
    fontWeightSemiBold: React.CSSProperties["fontWeight"];
  }

  interface TypographyVariantsOptions {
    fontWeightSemiBold?: React.CSSProperties["fontWeight"];
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsFontWeightOverrides {
    semiBold: true;
  }
}

export const typography: TypographyOptions = {
  fontFamily: "Inter",
  fontSize: 16,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontSize: "4.5rem",
    lineHeight: "5.625rem",
    letterSpacing: "-2%",
  },
  h2: {
    fontSize: "3.75rem",
    lineHeight: "4.5rem",
    letterSpacing: "-2%",
  },
  h3: {
    fontSize: "3rem",
    lineHeight: "3.75rem",
    letterSpacing: "-2%",
  },
  h4: {
    fontSize: "2.25rem",
    lineHeight: "2.75rem",
    letterSpacing: "-2%",
  },
  h5: {
    fontSize: "1.875rem",
    lineHeight: "2.375rem",
  },
  h6: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
  },
  subtitle1: {
    fontSize: "1.25rem",
    lineHeight: "1.875rem",
  },
  subtitle2: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
  },
  body1: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: "1.125rem",
  },
  overline: {
    fontSize: "0.625rem",
    lineHeight: "1rem",
  },
};
