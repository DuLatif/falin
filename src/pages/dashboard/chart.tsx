import { LoadingScreen } from "@/ui/sections/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { Suspense, lazy } from "react"
const ChartGuide = lazy(() => delayLoading(import("@/app/design-system/chart")))

const ChartPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ChartGuide />
    </Suspense>
  )
}

export default ChartPage
