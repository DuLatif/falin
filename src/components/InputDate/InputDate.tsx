import { Box, FormControl, FormHelperText, InputLabel } from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { Dayjs } from "dayjs"
import { CalendarBlank } from "phosphor-react"
import React, { useId } from "react"
import "./InputDate.module.scss"

const slots = {
  openPickerIcon: CalendarBlank,
}
const slotProps = {
  popper: {
    className: "date-picker__popper",
  },
}
export interface IInputDateProps extends DatePickerProps<Dayjs> {
  label: string
  helperText?: string
  required?: boolean
  error?: boolean
}
const InputDate: React.FC<IInputDateProps> = React.forwardRef((props, ref) => {
  const id = useId()
  const { label, required, error, helperText, ...datePickerProps } = props

  return (
    <Box ref={ref}>
      <FormControl id={id} fullWidth required={required} error={error} disabled={props.disabled}>
        <InputLabel>{label}</InputLabel>
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
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Box>
  )
})
InputDate.displayName = "InputDate"
export default InputDate
