import { LoadingScreen } from "@/components/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const AlertGuide = lazy(() => delayLoading(import("@/features/dashboard/alert")))

const AlertPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AlertGuide />
    </Suspense>
  )
}

export default AlertPage
