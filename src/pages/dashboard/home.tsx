import { LoadingScreen } from "@/components/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { Suspense, lazy } from "react"
const Component = lazy(() => delayLoading(import("@/features/dashboard/home")))

const HomePage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component />
    </Suspense>
  )
}

export default HomePage
