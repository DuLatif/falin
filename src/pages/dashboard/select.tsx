import { LoadingScreen } from "@/components/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const SelectGuide = lazy(() => delayLoading(import("@/features/dashboard/select")))

const SelectPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SelectGuide />
    </Suspense>
  )
}

export default SelectPage
