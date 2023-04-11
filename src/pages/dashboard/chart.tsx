import { CircularProgress } from "@mui/material"
import React, { Suspense, lazy } from "react"
const ChartGuide = lazy(() => import("@/features/dashboard/chart"))

const ChartPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ChartGuide />
    </Suspense>
  )
}

export default ChartPage
