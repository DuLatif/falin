import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import AvatarGrouped from "./AvatarGrouped"
import AvatarIcons from "./AvatarIcons"
import AvatarImage from "./AvatarImage"
import AvatarLetter from "./AvatarLetter"
import AvatarSizes from "./AvatarSizes"
import AvatarVariants from "./AvatarVariants"

const AvatarGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Avatar Guide</Typography>
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <AvatarImage />
          </Grid>
          <Grid item md={6}>
            <AvatarSizes />
          </Grid>
          <Grid item md={6}>
            <AvatarLetter />
          </Grid>
          <Grid item md={6}>
            <AvatarIcons />
          </Grid>
          <Grid item md={6}>
            <AvatarGrouped />
          </Grid>
          <Grid item md={6}>
            <AvatarVariants />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default AvatarGuide
