import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import ChartLine from "./ChartLine"
import ChartBar from "./ChartBar"
import ChartArea from "./ChartArea"
import ChartColumn from "./ChartColumn"
import ChartRadial from "./ChartRadial"
import ChartPie from "./ChartPie"

const ChartGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Chart Guide</Typography>
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <ChartLine />
          </Grid>
          <Grid item md={6}>
            <ChartBar />
          </Grid>
          <Grid item md={6}>
            <ChartArea />
          </Grid>
          <Grid item md={6}>
            <ChartColumn />
          </Grid>
          <Grid item md={6}>
            <ChartPie />
          </Grid>
          <Grid item md={6}>
            <ChartRadial />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ChartGuide
