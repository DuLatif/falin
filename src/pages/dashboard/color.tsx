import { CircularProgress } from "@mui/material"
import React, { lazy, Suspense } from "react"
const ColorGuide = lazy(() => import("@/features/dashboard/color"))

const ColorPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ColorGuide />
    </Suspense>
  )
}

export default ColorPage
