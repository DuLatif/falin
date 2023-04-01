import { CircularProgress } from "@mui/material"
import React, { lazy, Suspense } from "react"
const ButtonGuide = lazy(() => import("@/features/dashboard/button"))

const ButtonPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ButtonGuide />
    </Suspense>
  )
}

export default ButtonPage
