import { LoadingScreen } from "@/ui/views/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const ShadowGuide = lazy(() => delayLoading(import("@/app/design-system/shadow")))

const ShadowPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ShadowGuide />
    </Suspense>
  )
}

export default ShadowPage
