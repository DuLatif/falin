import { LoadingScreen } from "@/ui/views/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const AlertGuide = lazy(() => delayLoading(import("@/app/design-system/alert")))

const AlertPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AlertGuide />
    </Suspense>
  )
}

export default AlertPage
