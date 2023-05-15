import { LoadingScreen } from "@/components/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const ButtonGuide = lazy(() => delayLoading(import("@/features/dashboard/button")))

const ButtonPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ButtonGuide />
    </Suspense>
  )
}

export default ButtonPage
