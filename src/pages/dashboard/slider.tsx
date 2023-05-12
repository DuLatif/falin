import { LoadingScreen } from "@/components/LoadingPage"
import React, { Suspense, lazy } from "react"
const SliderGuide = lazy(() => import("@/features/dashboard/slider"))

const SliderPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SliderGuide />
    </Suspense>
  )
}

export default SliderPage
