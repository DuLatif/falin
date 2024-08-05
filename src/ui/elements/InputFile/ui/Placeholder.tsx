import { neutral } from "@/theme/ts/colors"
import { appendStyle } from "@/utils/styles"
import { FormLabel } from "@mui/material"
import React from "react"
import { styles } from "../InputFile.styles"

interface IPlaceholderProps {
  fileName: string | null
  multiple?: boolean
  placeholder?: string
}
const Placeholder: React.FC<IPlaceholderProps> = ({ fileName, multiple, placeholder }) => (
  <FormLabel
    sx={[...appendStyle(styles.label), { color: !fileName ? neutral[400] : "inherit" }]}
    required={false}
    error={false}
  >
    {multiple ? placeholder : fileName || placeholder}
  </FormLabel>
)

export default Placeholder
