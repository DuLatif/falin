import { LoadingScreen } from "@/ui/views/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const AvatarGuide = lazy(() => delayLoading(import("@/app/design-system/avatar")))

const AvatarPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AvatarGuide />
    </Suspense>
  )
}

export default AvatarPage
