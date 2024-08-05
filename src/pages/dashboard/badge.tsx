import { LoadingScreen } from "@/ui/sections/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const BadgeGuide = lazy(() => delayLoading(import("@/app/design-system/badge")))

const BadgePage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <BadgeGuide />
    </Suspense>
  )
}

export default BadgePage
