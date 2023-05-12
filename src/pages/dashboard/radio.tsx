import { LoadingScreen } from "@/components/LoadingPage"
import React, { lazy, Suspense } from "react"
const RadioGuide = lazy(() => import("@/features/dashboard/radio"))

const RadioPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <RadioGuide />
    </Suspense>
  )
}

export default RadioPage
