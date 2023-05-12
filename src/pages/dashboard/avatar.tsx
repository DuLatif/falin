import { LoadingScreen } from "@/components/LoadingPage"
import React, { lazy, Suspense } from "react"
const AvatarGuide = lazy(() => import("@/features/dashboard/avatar"))

const AvatarPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AvatarGuide />
    </Suspense>
  )
}

export default AvatarPage
