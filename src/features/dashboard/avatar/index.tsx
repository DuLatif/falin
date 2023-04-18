import { primary, success } from "@/theme/colors"
import { Avatar, AvatarGroup, Box, Card, Grid, Stack, Typography } from "@mui/material"
import { User, UserCircle, Users } from "phosphor-react"
import React from "react"
import AvatarImage from "./AvatarImage"
import AvatarLetter from "./AvatarLetter"
import AvatarSizes from "./AvatarSizes"
import AvatarIcons from "./AvatarIcons"
import AvatarVariants from "./AvatarVariants"
import AvatarGrouped from "./AvatarGrouped"

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
