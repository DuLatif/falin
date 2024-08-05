import { LoadingScreen } from "@/ui/sections/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { Suspense, lazy } from "react"
const MapGuide = lazy(() => delayLoading(import("@/app/design-system/map")))

const MapPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <MapGuide />
    </Suspense>
  )
}

export default MapPage
