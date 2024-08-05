import { LoadingScreen } from "@/ui/views/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const ColorGuide = lazy(() => delayLoading(import("@/app/design-system/color")))

const ColorPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ColorGuide />
    </Suspense>
  )
}

export default ColorPage
