import { LoadingScreen } from "@/ui/sections/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const TooltipGuide = lazy(() => delayLoading(import("@/app/design-system/tooltip")))

const TooltipPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <TooltipGuide />
    </Suspense>
  )
}

export default TooltipPage
