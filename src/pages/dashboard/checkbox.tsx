import { LoadingScreen } from "@/ui/views/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const CheckboxGuide = lazy(() => delayLoading(import("@/app/design-system/checkbox")))

const CheckboxPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <CheckboxGuide />
    </Suspense>
  )
}

export default CheckboxPage
