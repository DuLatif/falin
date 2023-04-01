import { CircularProgress } from "@mui/material"
import React, { lazy, Suspense } from "react"
const ModalGuide = lazy(() => import("@/features/dashboard/modal"))

const ModalPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ModalGuide />
    </Suspense>
  )
}

export default ModalPage
