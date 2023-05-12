import { LoadingScreen } from "@/components/LoadingPage"
import React, { Suspense, lazy } from "react"
const SpacingGuide = lazy(() => import("@/features/dashboard/spacing"))

const SpacingPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SpacingGuide />
    </Suspense>
  )
}

export default SpacingPage
