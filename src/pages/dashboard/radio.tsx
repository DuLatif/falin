import { LoadingScreen } from "@/components/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const RadioGuide = lazy(() => delayLoading(import("@/features/dashboard/radio")))

const RadioPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <RadioGuide />
    </Suspense>
  )
}

export default RadioPage
