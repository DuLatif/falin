import { CircularProgress } from "@mui/material"
import React, { Suspense, lazy } from "react"
const Component = lazy(() => import("@/features/dashboard/home"))

const HomePage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Component />
    </Suspense>
  )
}

export default HomePage
