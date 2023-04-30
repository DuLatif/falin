import { appendStyle } from "@/utils/styles"
import { Box, Button } from "@mui/material"
import React, { useRef } from "react"
import { styles } from "../InputFile.styles"
import useLogic from "../useLogic"
import Placeholder from "./Placeholder"
import { IInputFileProps } from "../InputFile"

interface IInputBoxProps {
  inputFileProps: IInputFileProps
  id: string
}
const InputBox: React.FC<IInputBoxProps> = ({ inputFileProps, id }) => {
  const {
    fileName,
    handleChangeInput,
    params: { disabled, error, placeholder, color, multiple },
    inputProps,
  } = useLogic(inputFileProps)
  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <>
      <input
        id={id}
        {...inputProps}
        disabled={disabled}
        ref={inputRef}
        type="file"
        hidden
        onChange={handleChangeInput}
      />
      <label htmlFor={id}>
        <Box sx={[...appendStyle(styles.root), error && styles.error, disabled && styles.disabled]}>
          <Placeholder multiple={multiple} fileName={fileName} placeholder={placeholder} />
          <Button color={color} sx={styles.btn} disabled={disabled} onClick={() => inputRef?.current?.click()}>
            Browse file
          </Button>
        </Box>
      </label>
    </>
  )
}

export default InputBox
