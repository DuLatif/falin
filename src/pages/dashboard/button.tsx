import { LoadingScreen } from "@/ui/views/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const ButtonGuide = lazy(() => delayLoading(import("@/app/design-system/button")))

const ButtonPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ButtonGuide />
    </Suspense>
  )
}

export default ButtonPage
