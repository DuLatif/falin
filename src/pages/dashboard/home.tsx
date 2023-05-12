import { LoadingScreen } from "@/components/LoadingPage"
import React, { Suspense, lazy } from "react"
const Component = lazy(() => import("@/features/dashboard/home"))

const HomePage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component />
    </Suspense>
  )
}

export default HomePage
