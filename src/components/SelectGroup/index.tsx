import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import React, { useId } from "react";

export interface ISelectGroupProps extends SelectProps {
  label: string;
  helperText?: string;
  options: { label: string; value: string | number | " " }[];
}
const SelectGroup = (props: ISelectGroupProps) => {
  const id = useId();

  return (
    <FormControl
      required={props.required}
      error={props.error}
      disabled={props.disabled}
    >
      <FormLabel htmlFor={id}>{props.label}</FormLabel>
      <Select {...props} defaultValue={props.defaultValue || " "} id={id}>
        {props.placeholder && (
          <MenuItem value=" ">-- {props.placeholder} ---</MenuItem>
        )}
        {props.options.map((item, i) => (
          <MenuItem key={i} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{props.helperText}</FormHelperText>
    </FormControl>
  );
};

export default SelectGroup;
