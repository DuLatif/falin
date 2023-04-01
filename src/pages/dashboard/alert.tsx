import { CircularProgress } from "@mui/material"
import React, { lazy, Suspense } from "react"
const AlertGuide = lazy(() => import("@/features/dashboard/alert"))

const AlertPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <AlertGuide />
    </Suspense>
  )
}

export default AlertPage
