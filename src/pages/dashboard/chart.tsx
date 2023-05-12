import { LoadingScreen } from "@/components/LoadingPage"
import React, { Suspense, lazy } from "react"
const ChartGuide = lazy(() => import("@/features/dashboard/chart"))

const ChartPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ChartGuide />
    </Suspense>
  )
}

export default ChartPage
