import { CircularProgress } from "@mui/material"
import React, { Suspense, lazy } from "react"
const CalendarGuide = lazy(() => import("@/features/dashboard/calendar"))

const CalendarPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <CalendarGuide />
    </Suspense>
  )
}

export default CalendarPage
