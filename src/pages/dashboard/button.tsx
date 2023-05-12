import { LoadingScreen } from "@/components/LoadingPage"
import React, { lazy, Suspense } from "react"
const ButtonGuide = lazy(() => import("@/features/dashboard/button"))

const ButtonPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ButtonGuide />
    </Suspense>
  )
}

export default ButtonPage
