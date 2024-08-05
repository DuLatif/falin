import { LoadingScreen } from "@/ui/sections/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const RadioGuide = lazy(() => delayLoading(import("@/app/design-system/radio")))

const RadioPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <RadioGuide />
    </Suspense>
  )
}

export default RadioPage
