import { LoadingScreen } from "@/ui/views/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { Suspense, lazy } from "react"
const Component = lazy(() => delayLoading(import("@/app/design-system/home")))

const HomePage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component />
    </Suspense>
  )
}

export default HomePage
