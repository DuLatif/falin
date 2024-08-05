import { LoadingScreen } from "@/ui/sections/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const ModalGuide = lazy(() => delayLoading(import("@/app/design-system/modal")))

const ModalPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ModalGuide />
    </Suspense>
  )
}

export default ModalPage
