import { LoadingScreen } from "@/components/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { Suspense, lazy } from "react"
const MapGuide = lazy(() => delayLoading(import("@/features/dashboard/map")))

const MapPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <MapGuide />
    </Suspense>
  )
}

export default MapPage
