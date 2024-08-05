import { LoadingScreen } from "@/ui/views/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const SnackbarGuide = lazy(() => delayLoading(import("@/app/design-system/snackbar")))

const SnackbarPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SnackbarGuide />
    </Suspense>
  )
}

export default SnackbarPage
