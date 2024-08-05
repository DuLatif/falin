import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import TooltipLong from "./TooltipLong"
import TooltipShort from "./TooltipShort"

const TooltipGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Tooltip Guide</Typography>
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item md={8}>
            <TooltipShort />
          </Grid>
          <Grid item md={8}>
            <TooltipLong />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default TooltipGuide
