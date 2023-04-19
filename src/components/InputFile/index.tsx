import { appendStyle } from "@/utils/styles"
import { Box, Button, Chip, FormControl, FormHelperText, FormLabel, InputLabel, Stack, SxProps } from "@mui/material"
import React, { useEffect, useId, useRef, useState } from "react"
import { danger, neutral } from "@/theme/colors"

interface IStyle {
  root: SxProps
  error: SxProps
  disabled: SxProps
  label: SxProps
  btn: SxProps
}

const styles: IStyle = {
  root: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    border: `1px solid ${neutral[300]}`,
    boxShadow: "0px 2px 2px rgba(218, 227, 225, 0.1), inset 0px -1px 1px rgba(218, 227, 225, 0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px",
    paddingLeft: "12px",
    cursor: "pointer",
    overflow: "hidden",
    margin: "6px auto",
    marginTop: "15px",
    marginBottom: "0px",
    height: "40px",
  },
  error: {
    border: `1px solid ${danger[300]}`,
  },
  disabled: {
    pointerEvents: "none",
  },
  label: {
    pointerEvents: "none",
    fontSize: "16px",
    marginTop: "4px",
  },
  btn: {
    boxShadow: "none",
    color: "#fff",
    borderRadius: "0px",
  },
}

export interface IInputFile extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: File | FileList | File[]) => void
  label: string
  helperText?: string
  required?: boolean
  error?: boolean
  disabled?: boolean
  placeholder?: string
  color?: "inherit" | "primary" | "error" | "secondary" | "info" | "success" | "warning"
}
const InputFile: React.FC<IInputFile> = React.forwardRef(
  (
    {
      label,
      helperText,
      required,
      error,
      disabled,
      placeholder = "Select a file...",
      color = "primary",
      onChange,
      ...props
    },
    ref
  ) => {
    const id = useId()
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [fileName, setFileName] = useState<string | null>(null)
    const [file, setFile] = useState<File | null>(null)
    const [files, setFiles] = useState<FileList | File[]>([])

    useEffect(() => {
      if (file && onChange && !props.multiple) {
        onChange(file)
      }
    }, [file])

    useEffect(() => {
      if (files && onChange && props.multiple) {
        onChange(files)
      }
    }, [files])

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        if (!props.multiple) {
          setFileName(e.target.files[0].name)
          setFile(e.target.files[0])
        } else {
          setFiles(e.target.files)
        }
      }
    }

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
  }
)

InputFile.displayName = "InputFile"
export default InputFile
