import { LoadingScreen } from "@/components/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const TypographyList = lazy(() => delayLoading(import("@/features/dashboard/typography")))

const TypographyPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <TypographyList />
    </Suspense>
  )
}

export default TypographyPage
