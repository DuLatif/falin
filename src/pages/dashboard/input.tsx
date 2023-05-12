import { LoadingScreen } from "@/components/LoadingPage"
import React, { lazy, Suspense } from "react"
const InputGuide = lazy(() => import("@/features/dashboard/input"))

const InputPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <InputGuide />
    </Suspense>
  )
}

export default InputPage
