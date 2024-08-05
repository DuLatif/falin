import { Box } from "@mui/material"
import React, { InputHTMLAttributes, ReactNode, useId } from "react"
import Render from "../../elements/Render/Render"
import classes from "./InputFloating.module.scss"

export interface InputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
}

const InputFloating: React.FC<InputLabelProps> = React.forwardRef<HTMLInputElement, InputLabelProps>((props, ref) => {
  const id = useId()
  const { label, error, startIcon, endIcon, ...inputProps } = props

  return (
    <div data-testid="input-label">
      <Box id={id} className={classes.FormGroup}>
        {startIcon && <Box className={classes.StartIcon}>{startIcon || ""}</Box>}
        <Box
          className={[
            classes.Container,
            error && classes.Error,
            props.disabled && classes.Disabled,
            props.startIcon && classes.Input_startIcon,
          ].join(" ")}
        >
          <Box className={classes.InputLabel}>
            <input className={classes.Input} placeholder=" " {...inputProps} ref={ref} />
            <label className={classes.Label}>
              {label}
              <Render in={!!props.required}>
                <span className={classes.Asteric}>*</span>
              </Render>
            </label>
          </Box>
        </Box>
        {endIcon && <Box className={classes.EndIcon}>{endIcon || ""}</Box>}
      </Box>
    </div>
  )
})

InputFloating.displayName = "InputFloating"
export default InputFloating
