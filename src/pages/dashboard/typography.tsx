import { LoadingScreen } from "@/ui/sections/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const TypographyList = lazy(() => delayLoading(import("@/app/design-system/typography")))

const TypographyPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <TypographyList />
    </Suspense>
  )
}

export default TypographyPage
