import { LoadingScreen } from "@/components/LoadingPage"
import React, { Suspense, lazy } from "react"
const MapGuide = lazy(() => import("@/features/dashboard/map"))

const MapPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <MapGuide />
    </Suspense>
  )
}

export default MapPage
