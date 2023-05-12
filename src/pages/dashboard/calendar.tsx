import { LoadingScreen } from "@/components/LoadingPage"
import React, { Suspense, lazy } from "react"
const CalendarGuide = lazy(() => import("@/features/dashboard/calendar"))

const CalendarPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <CalendarGuide />
    </Suspense>
  )
}

export default CalendarPage
