import { LoadingScreen } from "@/components/LoadingPage"
import React, { lazy, Suspense } from "react"
const BadgeGuide = lazy(() => import("@/features/dashboard/badge"))

const BadgePage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <BadgeGuide />
    </Suspense>
  )
}

export default BadgePage
