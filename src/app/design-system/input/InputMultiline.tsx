import { Card, Grid, Typography } from "@mui/material"
import React from "react"
import { inputMultiline1 } from "./_code/code-snippet"
import CodeSnippet from "@/ui/components/CodeSnippet"
import InputGroup from "@/ui/components/InputGroup"

const InputMultilineGuide: React.FC = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Input Multiline
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <InputGroup label="Description" placeholder="Description" multiline minRows={4} />
        </Grid>
        <Grid item md={6}>
          <InputGroup label="Description" required placeholder="Description" multiline minRows={4} />
        </Grid>
        <Grid item md={6}>
          <InputGroup
            label="Description"
            required
            placeholder="Description"
            multiline
            minRows={4}
            helperText="This is a hint to help user"
          />
        </Grid>
        <Grid item md={6}>
          <InputGroup
            label="Description"
            required
            placeholder="Description"
            multiline
            error
            minRows={4}
            helperText="This is an error message"
          />
        </Grid>
      </Grid>
      <CodeSnippet code={inputMultiline1} />
    </Card>
  )
}

export default InputMultilineGuide
