import { Card, Grid, InputAdornment, Tooltip, Typography } from "@mui/material"
import { CurrencyDollar, EnvelopeSimple, Question, User } from "phosphor-react"
import React from "react"
import { inputAdorAddress, inputAdorAmount, inputAdorEmail, inputAdorName } from "./_code/code-snippet"
import CodeSnippet from "@/ui/components/CodeSnippet"
import InputGroup from "@/ui/components/InputGroup"

const InputAdormentGuide: React.FC = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Input Adornment
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <InputGroup
            label="Name"
            placeholder="Full Name"
            startAdornment={
              <InputAdornment position="start">
                <User size={22} />
              </InputAdornment>
            }
          />
          <CodeSnippet code={inputAdorName} />
        </Grid>
        <Grid item md={6}>
          <InputGroup
            label="Email"
            placeholder="email@address.com"
            required
            startAdornment={
              <InputAdornment position="start">
                <EnvelopeSimple size={22} />
              </InputAdornment>
            }
          />
          <CodeSnippet code={inputAdorEmail} />
        </Grid>
        <Grid item md={6}>
          <InputGroup
            label="Address"
            placeholder="Your address"
            required
            readOnly
            value="Singpore"
            endAdornment={
              <InputAdornment position="end">
                <Tooltip title="This is tooltip description">
                  <Question size={22} />
                </Tooltip>
              </InputAdornment>
            }
          />
          <CodeSnippet code={inputAdorAddress} />
        </Grid>
        <Grid item md={6}>
          <InputGroup
            label="Donation Amount"
            placeholder="Amount"
            type="number"
            value={20}
            disabled
            startAdornment={
              <InputAdornment position="start">
                <CurrencyDollar size={22} />
              </InputAdornment>
            }
          />
          <CodeSnippet code={inputAdorAmount} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default InputAdormentGuide
