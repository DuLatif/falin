import { LoadingScreen } from "@/ui/sections/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const SelectGuide = lazy(() => delayLoading(import("@/app/design-system/select")))

const SelectPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SelectGuide />
    </Suspense>
  )
}

export default SelectPage
