import { FormControl, FormHelperText, InputLabel } from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { Dayjs } from "dayjs"
import { CalendarBlank } from "phosphor-react"
import React, { useId } from "react"
import "./_.scss"

export interface IInputDateProps extends DatePickerProps<Dayjs> {
  label: string
  helperText?: string
  required?: boolean
  error?: boolean
}
const InputDate: React.FC<IInputDateProps> = (props) => {
  const id = useId()
  const { label, required, error, helperText, ...datePickerProps } = props

  return (
    <FormControl id={id} fullWidth required={required} error={error} disabled={props.disabled}>
      <InputLabel>{label}</InputLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          format="DD/MM/YYYY"
          className={`date-picker ${error && "Mui-error"}`}
          views={["year", "month", "day"]}
          slots={{
            openPickerIcon: CalendarBlank,
          }}
          slotProps={{
            popper: {
              className: "date-picker__popper",
            },
          }}
          {...datePickerProps}
        />
      </LocalizationProvider>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}

export default InputDate
