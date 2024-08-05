import InputDate from "@/ui/elements/InputDate"
import { Card, Grid, Typography } from "@mui/material"
import React from "react"

const InputDateGuide: React.FC = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Input Date
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <InputDate
            label="Date of Birth"
            onChange={(value) => {
              console.log(value?.format("DD-MM-YYYY"))
            }}
          />
        </Grid>
        <Grid item md={6}>
          <InputDate label="Date of Birth" required error helperText="This is eror message" />
        </Grid>
      </Grid>
    </Card>
  )
}

export default InputDateGuide
