import { LoadingScreen } from "@/components/LoadingPage"
import React, { lazy, Suspense } from "react"
const TypographyList = lazy(() => import("@/features/dashboard/typography"))

const TypographyPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <TypographyList />
    </Suspense>
  )
}

export default TypographyPage
