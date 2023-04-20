import React, { useId, useState } from "react"
import CheckedIcon from "@/assets/forms/radio-checked.svg"
import HoverIcon from "@/assets/forms/radio-hover.svg"
import UncheckIcon from "@/assets/forms/radio-uncheck.svg"
import { Box, FormControlLabel, Radio as MuiRadio, FormControlLabelProps } from "@mui/material"
import { styles } from "./styles"

export interface IRadioProps extends Omit<FormControlLabelProps, keyof { control: any }> {
  align?: "center" | "top"
}
const Radio: React.FC<IRadioProps> = React.forwardRef(({ align, ...props }, ref) => {
  const id = useId()
  const [icon, setIcon] = useState(UncheckIcon)

  const controlLabelSx = {
    alignItems: align === "center" ? "center" : "flex-start",
    "& span.MuiRadio-root": {
      marginTop: align === "center" ? "0px" : "4px",
    },
    ...styles.label,
  }

  return (
    <Box data-testid="radio-label" id={id} sx={styles.box}>
      <FormControlLabel
        {...props}
        ref={ref}
        sx={controlLabelSx}
        onMouseOver={() => !props.disabled && setIcon(HoverIcon)}
        onMouseLeave={() => setIcon(UncheckIcon)}
        control={
          <MuiRadio
            sx={styles.radio}
            icon={<img style={{ position: "absolute" }} src={icon} />}
            checkedIcon={<img style={{ position: "absolute" }} src={CheckedIcon} />}
          />
        }
      />
    </Box>
  )
})

Radio.displayName = "Radio"
export default Radio
