import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import AlertDescription from "./AlertDescription"
import AlertFilled from "./AlertFilled"
import AlertOutlined from "./AlertOutlined"

const AlertGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Alert Guide</Typography>
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <AlertFilled />
          </Grid>
          <Grid item md={6}>
            <AlertOutlined />
          </Grid>
          <Grid item md={12}>
            <AlertDescription />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default AlertGuide
