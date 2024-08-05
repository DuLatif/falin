import { LoadingScreen } from "@/ui/sections/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { Suspense, lazy } from "react"
const CalendarGuide = lazy(() => delayLoading(import("@/app/design-system/calendar")))

const CalendarPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <CalendarGuide />
    </Suspense>
  )
}

export default CalendarPage
