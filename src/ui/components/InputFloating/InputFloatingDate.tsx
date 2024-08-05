import { Box } from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { Dayjs } from "dayjs"
import { CalendarBlank } from "phosphor-react"
import React, { ReactNode, useId } from "react"
import Render from "../../elements/Render/Render"
import classes from "./InputFloating.module.scss"

const slots = {
  openPickerIcon: CalendarBlank,
}
const slotProps = {
  popper: {
    className: "date-picker__popper",
  },
  desktopPaper: {
    className: "date-picker__paper",
  },
}

export interface InputLabelProps extends DatePickerProps<Dayjs> {
  label: string
  error?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  required?: boolean
}

const InputFloatingDate: React.FC<InputLabelProps> = React.forwardRef<HTMLInputElement, InputLabelProps>(
  (props, ref) => {
    const id = useId()
    const { label, error, startIcon, endIcon, ...datePickerProps } = props

    return (
      <div data-testid="input-label" ref={ref}>
        <Box id={id} className={classes.FormGroup}>
          {startIcon && <Box className={classes.StartIcon}>{startIcon || ""}</Box>}
          <Box
            className={[
              classes.Container,
              classes.InputDate,
              error && classes.Error,
              props.disabled && classes.Disabled,
              props.startIcon && classes.Input_startIcon,
            ].join(" ")}
          >
            <Box className={classes.InputLabel}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  format="DD/MM/YYYY"
                  className={`date-picker ${error && "Mui-error"}`}
                  views={["year", "month", "day"]}
                  slots={slots}
                  slotProps={slotProps}
                  {...datePickerProps}
                />
              </LocalizationProvider>
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
  }
)

InputFloatingDate.displayName = "InputFloatingDate"
export default InputFloatingDate
