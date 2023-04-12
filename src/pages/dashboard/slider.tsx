import { CircularProgress } from "@mui/material"
import React, { Suspense, lazy } from "react"
const SliderGuide = lazy(() => import("@/features/dashboard/slider"))

const SliderPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <SliderGuide />
    </Suspense>
  )
}

export default SliderPage
