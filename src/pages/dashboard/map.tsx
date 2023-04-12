import { CircularProgress } from "@mui/material"
import React, { Suspense, lazy } from "react"
const MapGuide = lazy(() => import("@/features/dashboard/map"))

const MapPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <MapGuide />
    </Suspense>
  )
}

export default MapPage
