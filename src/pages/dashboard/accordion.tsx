import { LoadingScreen } from "@/components/LoadingPage"
import React, { Suspense, lazy } from "react"
const AccordionGuide = lazy(() => import("@/features/dashboard/accordion"))

const AccordionPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AccordionGuide />
    </Suspense>
  )
}

export default AccordionPage
