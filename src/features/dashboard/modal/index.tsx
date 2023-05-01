import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import ModalBasicGuide from "./ModalBasicGuide"
import ModalErrorGuide from "./ModalErrorGuide"
import ModalIconGuide from "./ModalIconGuide"

const ModalGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Modal Guide</Typography>
      <Box mt={4}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <ModalBasicGuide />
          </Grid>
          <Grid item md={6}>
            <ModalIconGuide />
          </Grid>
          <Grid item md={6}>
            <ModalErrorGuide />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ModalGuide
