const baseContainer = (code: string) => {
  return `import React from "react";
import { Box } from "@mui/material";
import SelectGroup from "@/components/SelectGroup";

const listOptions = [
  { label: "Islam", value: "Islam" },
  { label: "Kristen", value: "Kristen" },
  { label: "Katholik", value: "Katholik" },
  { label: "Budha", value: "Budha" },
];

const App : React.FC = () => {
  return (
    <Box>
      ${code}
    </Box>
  )
}`
}

export const selectGroupBasicCode = baseContainer("<SelectGroup label=\"Basic Select\" options={listOptions} />")

export const selectGroupWithPlaceholderCode = baseContainer(`<SelectGroup
        label="Select with placeholder"
        options={listOptions}
        helperText={"This is a helper text"}
      />`)

export const selectGroupRequiredCode = baseContainer(
  "<SelectGroup label=\"Required Select\" options={listOptions} required />"
)

export const selectGroupErrorCode = baseContainer(`<SelectGroup
        label="Select Error"
        options={listOptions}
        required
        error
        helperText="This is a error message"
      />`)

export const selectGroupDisabled = baseContainer(`<SelectGroup
        label="Disabled Select"
        options={listOptions}
        required
        disabled
        helperText="This is a error message"
      />`)
