import { neutral } from "@/theme/colors"
import { appendStyle } from "@/utils/styles"
import { Box, Button, Chip, FormControl, FormHelperText, FormLabel, InputLabel, Stack } from "@mui/material"
import React, { useId, useRef } from "react"
import { styles } from "./InputFile.styles"
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
  const inputRef = useRef<HTMLInputElement | null>(null)
  const {
    params: { placeholder, label, helperText, required, disabled, error, color, ...props },
    files,
    setFiles,
    fileName,
    handleChangeInput,
  } = useLogic(propsParam)

  const Placeholder = () => (
    <FormLabel
      sx={[...appendStyle(styles.label), { color: !fileName ? neutral[400] : "inherit" }]}
      required={false}
      error={false}
    >
      {props.multiple ? placeholder : fileName || placeholder}
    </FormLabel>
  )

  const InputBox = () => (
    <>
      <input id={id} {...props} disabled={disabled} ref={inputRef} type="file" hidden onChange={handleChangeInput} />
      <label htmlFor={id}>
        <Box sx={[...appendStyle(styles.root), error && styles.error, disabled && styles.disabled]}>
          <Placeholder />
          <Button color={color} sx={styles.btn} disabled={disabled} onClick={() => inputRef?.current?.click()}>
            Browse file
          </Button>
        </Box>
      </label>
    </>
  )

  const ListFiles = () => (
    <Stack direction="row" flexWrap={"wrap"} spacing={1} rowGap={1} sx={{ marginTop: "4px" }}>
      {Array.from(files).map((item) => (
        <Chip
          key={item.name}
          size="small"
          label={item.name}
          onDelete={() => setFiles(Array.from(files).filter((file) => file.name !== item.name))}
        />
      ))}
    </Stack>
  )

  return (
    <Box ref={ref}>
      <FormControl required={required} disabled={disabled} error={error}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <InputBox />
        <FormHelperText>{helperText}</FormHelperText>
        {props.multiple && <ListFiles />}
      </FormControl>
    </Box>
  )
})

InputFile.displayName = "InputFile"
export default InputFile
