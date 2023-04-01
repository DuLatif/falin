import { CircularProgress } from "@mui/material"
import React, { lazy, Suspense } from "react"
const BadgeGuide = lazy(() => import("@/features/dashboard/badge"))

const BadgePage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <BadgeGuide />
    </Suspense>
  )
}

export default BadgePage
