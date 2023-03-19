import React, { useId, useState } from "react";
import CheckedIcon from "@/assets/forms/checkbox-checked.svg";
import HoverIcon from "@/assets/forms/checkbox-hover.svg";
import UncheckIcon from "@/assets/forms/checkbox-uncheck.svg";
import {
  Box,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  SxProps,
  FormControlLabelProps,
} from "@mui/material";

const styles: { box: SxProps; label: SxProps; checkbox: SxProps } = {
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
};

export interface ICheckboxProps
  extends Omit<FormControlLabelProps, keyof { control: any }> {
  align?: "center" | "top";
}
const Checkbox: React.FC<ICheckboxProps> = ({ align, ...props }) => {
  const id = useId();
  const [icon, setIcon] = useState(UncheckIcon);

  const controlLabelSx = {
    alignItems: align === "center" ? "center" : "flex-start",
    "& span.MuiCheckbox-root": {
      marginTop: align === "center" ? "0px" : "4px",
    },
    ...styles.label,
  };

  return (
    <Box data-testid="checkbox-label" id={id} sx={styles.box}>
      <FormControlLabel
        {...props}
        sx={controlLabelSx}
        onMouseOver={() => !props.disabled && setIcon(HoverIcon)}
        onMouseLeave={() => setIcon(UncheckIcon)}
        control={
          <MuiCheckbox
            sx={styles.checkbox}
            icon={<img style={{ position: "absolute" }} src={icon} />}
            checkedIcon={
              <img style={{ position: "absolute" }} src={CheckedIcon} />
            }
          />
        }
      />
    </Box>
  );
};

export default Checkbox;
