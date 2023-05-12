import { LoadingScreen } from "@/components/LoadingPage"
import React, { lazy, Suspense } from "react"
const ColorGuide = lazy(() => import("@/features/dashboard/color"))

const ColorPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ColorGuide />
    </Suspense>
  )
}

export default ColorPage
