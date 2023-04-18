import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import SmallCalendarGuide from "./SmallCalendar"
import BigCalendarGuide from "./BigCalendarGuide"

const CalendarGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Calendar Guide</Typography>
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <SmallCalendarGuide />
          </Grid>
          <Grid item md={12}>
            <BigCalendarGuide />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default CalendarGuide
