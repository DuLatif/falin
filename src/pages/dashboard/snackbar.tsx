import { LoadingScreen } from "@/components/LoadingPage"
import React, { lazy, Suspense } from "react"
const SnackbarGuide = lazy(() => import("@/features/dashboard/snackbar"))

const SnackbarPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SnackbarGuide />
    </Suspense>
  )
}

export default SnackbarPage
