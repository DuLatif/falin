import { CircularProgress } from "@mui/material"
import React, { lazy, Suspense } from "react"
const TooltipGuide = lazy(() => import("@/features/dashboard/tooltip"))

const TooltipPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <TooltipGuide />
    </Suspense>
  )
}

export default TooltipPage
