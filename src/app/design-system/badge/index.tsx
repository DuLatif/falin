import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import BadgeActionsGuide from "./BadgeActions"
import BadgeColorsGuide from "./BadgeColors"
import BadgeSizesGuide from "./BadgeSizes"
import BadgeVariantsGuide from "./BadgeVariants"

const BadgeGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Badge Guide</Typography>
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item md={7}>
            <Box mb={4}>
              <BadgeColorsGuide />
            </Box>
            <BadgeSizesGuide />
          </Grid>
          <Grid item md={5}>
            <Box mb={4}>
              <BadgeVariantsGuide />
            </Box>
            <BadgeActionsGuide />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default BadgeGuide
