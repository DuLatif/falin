import { CircularProgress } from "@mui/material"
import React, { lazy, Suspense } from "react"
const InputGuide = lazy(() => import("@/features/dashboard/input"))

const InputPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <InputGuide />
    </Suspense>
  )
}

export default InputPage
