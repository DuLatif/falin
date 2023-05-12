import { LoadingScreen } from "@/components/LoadingPage"
import React, { lazy, Suspense } from "react"
const ModalGuide = lazy(() => import("@/features/dashboard/modal"))

const ModalPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ModalGuide />
    </Suspense>
  )
}

export default ModalPage
