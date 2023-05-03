import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import SnackbarMessageGuide from "./SnackbarMessageGuide"
import SnackbarPositionGuide from "./SnackbarPositionGuide"
import SnackbarTransitionGuide from "./SnackbarTransitionGuide"
import SnackbarVariantGuide from "./SnackbarVariantGuide"

const SnackbarGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Snackbar Guide</Typography>
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <SnackbarVariantGuide />
          </Grid>
          <Grid item md={6}>
            <SnackbarTransitionGuide />
          </Grid>
          <Grid item md={6}>
            <SnackbarPositionGuide />
          </Grid>
          <Grid item md={6}>
            <SnackbarMessageGuide />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default SnackbarGuide
