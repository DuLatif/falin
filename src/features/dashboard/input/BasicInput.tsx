import CodeSnippet from "@/components/CodeSnippet"
import InputGroup from "@/components/InputGroup"
import { Card, Grid, Typography } from "@mui/material"
import React from "react"
import { baseInputAmount, baseInputDisabled, baseInputName, baseInputReadonly } from "./_code/code-snippet"

const BasicInputGuide: React.FC = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <Typography variant="subtitle1" fontWeight={"semiBold"}>
        Basic Input
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <InputGroup label="Name" placeholder="Full Name" />
          <CodeSnippet code={baseInputName} />
        </Grid>
        <Grid item md={6}>
          <InputGroup required label="Amount" placeholder="Donation Amount" type="number" />
          <CodeSnippet code={baseInputAmount} />
        </Grid>
        <Grid item md={6}>
          <InputGroup label="Readonly input" placeholder="This is value" readOnly />
          <CodeSnippet code={baseInputReadonly} />
        </Grid>
        <Grid item md={6}>
          <InputGroup label="Disabled Input" placeholder="This is value" type="text" disabled />
          <CodeSnippet code={baseInputDisabled} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default BasicInputGuide
