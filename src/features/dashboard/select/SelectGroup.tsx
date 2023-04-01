import CodeSnippet from "@/components/CodeSnippet"
import SelectGroup from "@/components/SelectGroup"
import { Card, Grid, Typography } from "@mui/material"
import React from "react"
import {
  selectGroupBasicCode,
  selectGroupDisabled,
  selectGroupErrorCode,
  selectGroupRequiredCode,
  selectGroupWithPlaceholderCode,
} from "./_code/select-group"

const listOptions = [
  { label: "Islam", value: "Islam" },
  { label: "Kristen", value: "Kristen" },
  { label: "Katholik", value: "Katholik" },
  { label: "Budha", value: "Budha" },
]

const SelectGroupGuide: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1">Select Group</Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <SelectGroup label="Basic Select" options={listOptions} />
          <CodeSnippet code={selectGroupBasicCode} />
        </Grid>
        <Grid item md={6}>
          <SelectGroup label="Select with placeholder" options={listOptions} helperText={"This is a helper text"} />
          <CodeSnippet code={selectGroupWithPlaceholderCode} />
        </Grid>
        <Grid item md={6}>
          <SelectGroup label="Required Select" options={listOptions} required />
          <CodeSnippet code={selectGroupRequiredCode} />
        </Grid>
        <Grid item md={6}>
          <SelectGroup
            label="Select Error"
            options={listOptions}
            required
            error
            helperText={"This is a error message"}
          />
          <CodeSnippet code={selectGroupErrorCode} />
        </Grid>
        <Grid item md={6}>
          <SelectGroup
            label="Disabled Select"
            options={listOptions}
            required
            disabled
            helperText={"This is a error message"}
          />
          <CodeSnippet code={selectGroupDisabled} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default SelectGroupGuide
