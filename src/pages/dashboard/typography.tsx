import { CircularProgress } from "@mui/material"
import React, { lazy, Suspense } from "react"
const TypographyList = lazy(() => import("@/features/dashboard/typography"))

const TypographyPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <TypographyList />
    </Suspense>
  )
}

export default TypographyPage
