import { FormControl, InputLabel } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarBlank } from "phosphor-react";
import React from "react";
import "./_.scss";

const InputDate: React.FC = () => {
  return (
    <FormControl>
      <InputLabel>Date of Birth</InputLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          format="DD/MM/YYYY"
          className="date-picker"
          slots={{
            openPickerIcon: CalendarBlank,
          }}
          slotProps={{
            popper: {
              className: "date-picker__popper",
            },
          }}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default InputDate;
