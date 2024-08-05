import { LoadingScreen } from "@/ui/sections/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const InputGuide = lazy(() => delayLoading(import("@/app/design-system/input")))

const InputPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <InputGuide />
    </Suspense>
  )
}

export default InputPage
