import { LoadingScreen } from "@/components/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const SnackbarGuide = lazy(() => delayLoading(import("@/features/dashboard/snackbar")))

const SnackbarPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SnackbarGuide />
    </Suspense>
  )
}

export default SnackbarPage
