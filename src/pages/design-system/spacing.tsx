import { LoadingScreen } from "@/ui/views/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { Suspense, lazy } from "react"
const SpacingGuide = lazy(() => delayLoading(import("@/app/design-system/spacing")))

const SpacingPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SpacingGuide />
    </Suspense>
  )
}

export default SpacingPage
