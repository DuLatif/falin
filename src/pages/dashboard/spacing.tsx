import { LoadingScreen } from "@/components/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { Suspense, lazy } from "react"
const SpacingGuide = lazy(() => delayLoading(import("@/features/dashboard/spacing")))

const SpacingPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SpacingGuide />
    </Suspense>
  )
}

export default SpacingPage
