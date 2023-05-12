import { LoadingScreen } from "@/components/LoadingPage"
import React, { lazy, Suspense } from "react"
const CheckboxGuide = lazy(() => import("@/features/dashboard/checkbox"))

const CheckboxPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <CheckboxGuide />
    </Suspense>
  )
}

export default CheckboxPage
