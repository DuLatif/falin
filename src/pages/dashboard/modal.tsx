import { LoadingScreen } from "@/components/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const ModalGuide = lazy(() => delayLoading(import("@/features/dashboard/modal")))

const ModalPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ModalGuide />
    </Suspense>
  )
}

export default ModalPage
