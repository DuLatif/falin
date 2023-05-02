import { CircularProgress } from "@mui/material"
import React, { Suspense, lazy } from "react"
const SpacingGuide = lazy(() => import("@/features/dashboard/spacing"))

const SpacingPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <SpacingGuide />
    </Suspense>
  )
}

export default SpacingPage
