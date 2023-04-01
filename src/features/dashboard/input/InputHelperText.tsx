import CodeSnippet from "@/components/CodeSnippet"
import InputGroup from "@/components/InputGroup"
import { Card, Grid, InputAdornment, Typography } from "@mui/material"
import { CurrencyDollar, EnvelopeSimple } from "phosphor-react"
import React from "react"
import {
  inputHelperAddress,
  inputHelperDisabled,
  inputHelperEmail,
  inputHelperName,
  inputHelperReadonly,
  inputHelperSale,
} from "./_code/code-snippet"

const InputHelperTextGuide: React.FC = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <Typography variant="subtitle1" fontWeight={"semiBold"}>
        Input With Helper Text
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <InputGroup label="Name" placeholder="Full Name" helperText="This is a hint text to help user" />
          <CodeSnippet code={inputHelperName} />
        </Grid>
        <Grid item md={6}>
          <InputGroup
            label="Email"
            placeholder="email@address.com"
            required
            helperText="This is required input"
            startAdornment={
              <InputAdornment position="start">
                <EnvelopeSimple size={22} />
              </InputAdornment>
            }
          />
          <CodeSnippet code={inputHelperEmail} />
        </Grid>
        <Grid item md={6}>
          <InputGroup label="Readonly input" placeholder="This is value" helperText="This is readonly input" readOnly />
          <CodeSnippet code={inputHelperReadonly} />
        </Grid>
        <Grid item md={6}>
          <InputGroup
            label="Disabled Input"
            placeholder="This is value"
            type="text"
            disabled
            helperText="This is disabled input"
          />
          <CodeSnippet code={inputHelperDisabled} />
        </Grid>
        <Grid item md={6}>
          <InputGroup error required helperText="This is error message" label="Address" placeholder="Your address" />
          <CodeSnippet code={inputHelperAddress} />
        </Grid>
        <Grid item md={6}>
          <InputGroup
            error
            required
            helperText="This is error message"
            label="Sale Amount"
            type="number"
            placeholder="1.000"
            startAdornment={
              <InputAdornment position="start">
                <CurrencyDollar size={22} />
              </InputAdornment>
            }
          />
          <CodeSnippet code={inputHelperSale} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default InputHelperTextGuide
