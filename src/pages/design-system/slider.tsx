import { LoadingScreen } from "@/ui/views/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { Suspense, lazy } from "react"
const SliderGuide = lazy(() => delayLoading(import("@/app/design-system/slider")))

const SliderPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SliderGuide />
    </Suspense>
  )
}

export default SliderPage
