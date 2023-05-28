import { Card, Typography, Grid, FormControl } from "@mui/material"
import React from "react"
import InputFloating from "@/components/InputFloating"
import { EnvelopeSimple, Info } from "phosphor-react"

const InputFloatingGuide: React.FC = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <Typography variant="subtitle1" fontWeight={"semiBold"}>
        Input Floating
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <FormControl>
            <InputFloating required label="Email" />
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl>
            <InputFloating error label="Email" />
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl>
            <InputFloating disabled label="Email" />
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl>
            <InputFloating
              startIcon={<EnvelopeSimple fontSize={24} />}
              endIcon={<Info fontSize={24} />}
              error
              label="Email"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Card>
  )
}

export default InputFloatingGuide
