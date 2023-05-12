import { LoadingScreen } from "@/components/LoadingPage"
import React, { lazy, Suspense } from "react"
const TooltipGuide = lazy(() => import("@/features/dashboard/tooltip"))

const TooltipPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <TooltipGuide />
    </Suspense>
  )
}

export default TooltipPage
