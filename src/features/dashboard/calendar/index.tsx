import { Box, Typography } from "@mui/material"
import React from "react"
import SmallCalendarGuide from "./SmallCalendar"
import BigCalendarGuide from "./BigCalendarGuide"

const CalendarGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Calendar Guide</Typography>
      <Box mt={4}>
        <SmallCalendarGuide />
        <BigCalendarGuide />
      </Box>
    </Box>
  )
}

export default CalendarGuide
