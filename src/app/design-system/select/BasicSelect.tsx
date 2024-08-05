import { Card, FormControl, FormHelperText, FormLabel, Grid, MenuItem, Select, Typography } from "@mui/material"
import React from "react"
import {
  basicDisabledSelectCode,
  basicRequiredSelectCode,
  basicSelectCode,
  basicSelectErrorCode,
  basicSelectPlaceholderCode,
} from "./_code/basic-select"
import CodeSnippet from "@/ui/components/CodeSnippet"
import SelectSearchable from "@/ui/components/SelectSearchable"

const BasicSelectGuide: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Basic Select
      </Typography>

      <Grid container spacing={2}>
        <Grid item md={6}>
          <FormControl>
            <FormLabel htmlFor="religion">Basic Select</FormLabel>
            <Select id="religion">
              <MenuItem value="Islam">Islam</MenuItem>
              <MenuItem value="Kristen">Kristen</MenuItem>
              <MenuItem value="Katholik">Katholik</MenuItem>
              <MenuItem value="Budha">Budha</MenuItem>
              <MenuItem value="Hindu">Hindu</MenuItem>
            </Select>
          </FormControl>
          <CodeSnippet code={basicSelectCode} />
        </Grid>
        <Grid item md={6}>
          <FormControl>
            <FormLabel htmlFor="religion">Select with placeholder</FormLabel>
            <Select defaultValue={" "} id="religion">
              <MenuItem value=" ">-- Religion ---</MenuItem>
              <MenuItem value="Islam">Islam</MenuItem>
              <MenuItem value="Kristen">Kristen</MenuItem>
              <MenuItem value="Katholik">Katholik</MenuItem>
              <MenuItem value="Budha">Budha</MenuItem>
              <MenuItem value="Hindu">Hindu</MenuItem>
            </Select>
            <FormHelperText>This is a helper text</FormHelperText>
          </FormControl>
          <CodeSnippet code={basicSelectPlaceholderCode} />
        </Grid>
        <Grid item md={6}>
          <FormControl required>
            <FormLabel htmlFor="religion">Required Select</FormLabel>
            <Select id="religion">
              <MenuItem value="Islam">Islam</MenuItem>
              <MenuItem value="Kristen">Kristen</MenuItem>
              <MenuItem value="Katholik">Katholik</MenuItem>
              <MenuItem value="Budha">Budha</MenuItem>
              <MenuItem value="Hindu">Hindu</MenuItem>
            </Select>
          </FormControl>
          <CodeSnippet code={basicRequiredSelectCode} />
        </Grid>
        <Grid item md={6}>
          <FormControl required error>
            <FormLabel htmlFor="religion">Select Error</FormLabel>
            <Select id="religion">
              <MenuItem value="Islam">Islam</MenuItem>
              <MenuItem value="Kristen">Kristen</MenuItem>
              <MenuItem value="Katholik">Katholik</MenuItem>
              <MenuItem value="Budha">Budha</MenuItem>
              <MenuItem value="Hindu">Hindu</MenuItem>
            </Select>
            <FormHelperText>This is a error message</FormHelperText>
          </FormControl>
          <CodeSnippet code={basicSelectErrorCode} />
        </Grid>
        <Grid item md={6}>
          <FormControl required disabled>
            <FormLabel htmlFor="religion">Disabled Select</FormLabel>
            <Select defaultValue={"Islam"} id="religion">
              <MenuItem value="Islam">Islam</MenuItem>
              <MenuItem value="Kristen">Kristen</MenuItem>
              <MenuItem value="Katholik">Katholik</MenuItem>
              <MenuItem value="Budha">Budha</MenuItem>
              <MenuItem value="Hindu">Hindu</MenuItem>
            </Select>
          </FormControl>
          <CodeSnippet code={basicDisabledSelectCode} />
        </Grid>
        <Grid item md={6}>
          <FormControl required>
            <FormLabel htmlFor="Country">Searchable Select</FormLabel>
            <SelectSearchable
              onChange={(val) => console.log(val)}
              options={[
                { label: "Indonesia", value: "Indonesia" },
                { label: "Malaysia", value: "Malaysia" },
                { label: "Singapore", value: "Singapore" },
                { label: "Thailand", value: "Thailand" },
                { label: "Myanmar", value: "Myanmar" },
                { label: "India", value: "India" },
              ]}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Card>
  )
}

export default BasicSelectGuide
