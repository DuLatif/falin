import { Box, FormControl, FormHelperText, InputLabel } from "@mui/material"
import React, { useId } from "react"
import Render from "../Render/Render"
import InputBox from "./ui/InputBox"
import ListFiles from "./ui/ListFiles"
import useLogic from "./useLogic"

export interface IInputFileProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: File | FileList | File[]) => void
  label: string
  helperText?: string
  required?: boolean
  error?: boolean
  disabled?: boolean
  placeholder?: string
  color?: "inherit" | "primary" | "error" | "secondary" | "info" | "success" | "warning"
}
const InputFile: React.FC<IInputFileProps> = React.forwardRef((propsParam, ref) => {
  const id = useId()
  const {
    params: { placeholder, label, helperText, required, disabled, error, color, ...props },
    files,
    setFiles,
  } = useLogic(propsParam)

  return (
    <Box ref={ref}>
      <FormControl required={required} disabled={disabled} error={error}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <InputBox id={id} inputProps={propsParam} />
        <FormHelperText>{helperText}</FormHelperText>
        <Render in={!!props.multiple}>
          <ListFiles files={files} setFiles={setFiles} />
        </Render>
      </FormControl>
    </Box>
  )
})

InputFile.displayName = "InputFile"
export default InputFile
