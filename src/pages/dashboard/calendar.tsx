import { LoadingScreen } from "@/components/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { Suspense, lazy } from "react"
const CalendarGuide = lazy(() => delayLoading(import("@/features/dashboard/calendar")))

const CalendarPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <CalendarGuide />
    </Suspense>
  )
}

export default CalendarPage
