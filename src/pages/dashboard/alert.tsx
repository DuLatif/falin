import { LoadingScreen } from "@/components/LoadingPage"
import React, { lazy, Suspense } from "react"
const AlertGuide = lazy(() => import("@/features/dashboard/alert"))

const AlertPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AlertGuide />
    </Suspense>
  )
}

export default AlertPage
