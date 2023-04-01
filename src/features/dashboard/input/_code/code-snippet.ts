// =============== Basic Input ================
const baseContainer = (code: string) => {
  return `import React from "react";
import InputGroup from "@/components/InputGroup";

const App : React.FC = () => {
  return (
    <Box>
      ${code}
    </Box>
  )
}`
}
export const baseInputName = baseContainer("<InputGroup label=\"Name\" placeholder=\"Full Name\" />")

export const baseInputAmount = baseContainer(`<InputGroup
        required
        label="Amount"
        placeholder="Donation Amount"
        type="number"
      />`)

export const baseInputDisabled = baseContainer(`<InputGroup
        label="Disabled Input"
        placeholder="This is value"
        type="text"
        disabled
      />`)

export const baseInputReadonly = baseContainer(`<InputGroup
        label="Readonly input"
        placeholder="This is value"
        readOnly
      />`)

// =============== Input Adornment ================

export const inputAdorName = `import React from "react";
import InputGroup from "@/components/InputGroup";
import { InputAdornment } from "@mui/material":
import { User } from "phosphor-react";

const App : React.FC = () => {
  return (
    <Box>
      <InputGroup
        label="Name"
        placeholder="Full Name"
        startAdornment={
          <InputAdornment position="start">
            <User size={22} />
          </InputAdornment>
        }
      />
    </Box>
  )
}`

export const inputAdorEmail = `import React from "react";
import InputGroup from "@/components/InputGroup";
import { InputAdornment } from "@mui/material":
import { EnvelopeSimple } from "phosphor-react";

const App : React.FC = () => {
  return (
    <Box>
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
    </Box>
  )
}`

export const inputAdorAddress = `import React from "react";
import InputGroup from "@/components/InputGroup";
import { InputAdornment } from "@mui/material":
import { Question } from "phosphor-react";

const App : React.FC = () => {
  return (
    <Box>
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
    </Box>
  )
}`

export const inputAdorAmount = `import React from "react";
import InputGroup from "@/components/InputGroup";
import { InputAdornment } from "@mui/material":
import { CurrencyDollar } from "phosphor-react";

const App : React.FC = () => {
  return (
    <Box>
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
    </Box>
  )
}`

// =============== Input Helper Text ================
export const inputHelperName = `import React from "react";
import InputGroup from "@/components/InputGroup";

const App : React.FC = () => {
  return (
    <Box>
      <InputGroup
        label="Name"
        placeholder="Full Name"
        helperText="This is a hint text to help user"
      />
    </Box>
  )
}`

export const inputHelperEmail = `import React from "react";
import InputGroup from "@/components/InputGroup";
import { InputAdornment } from "@mui/material":
import { EnvelopeSimple } from "phosphor-react";

const App : React.FC = () => {
  return (
    <Box>
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
    </Box>
  )
}`

export const inputHelperReadonly = `import React from "react";
import InputGroup from "@/components/InputGroup";

const App : React.FC = () => {
  return (
    <Box>
      <InputGroup
        label="Readonly input"
        placeholder="This is value"
        helperText="This is readonly input"
        readOnly
      />
    </Box>
  )
}`

export const inputHelperDisabled = `import React from "react";
import InputGroup from "@/components/InputGroup";

const App : React.FC = () => {
  return (
    <Box>
      <InputGroup
        label="Disabled Input"
        placeholder="This is value"
        type="text"
        disabled
        helperText="This is disabled input"
      />
    </Box>
  )
}`

export const inputHelperAddress = `import React from "react";
import InputGroup from "@/components/InputGroup";

const App : React.FC = () => {
  return (
    <Box>
      <InputGroup
        error
        required
        helperText="This is error message"
        label="Address"
        placeholder="Your address"
      />
    </Box>
  )
}`

export const inputHelperSale = `import React from "react";
import InputGroup from "@/components/InputGroup";
import { InputAdornment } from "@mui/material":
import { CurrencyDollar } from "phosphor-react";

const App : React.FC = () => {
  return (
    <Box>
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
    </Box>
  )
}`

// =============== Input Multiline ================
export const inputMultiline1 = baseContainer(`<Grid container spacing={2}>
        <Grid item md={6}>
          <InputGroup
            label="Description"
            placeholder="Description"
            multiline
            minRows={4}
          />
        </Grid>
        <Grid item md={6}>
          <InputGroup
            label="Description"
            required
            placeholder="Description"
            multiline
            minRows={4}
          />
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
      </Grid>`)
