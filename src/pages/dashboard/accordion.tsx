import { LoadingScreen } from "@/components/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { Suspense, lazy } from "react"
const AccordionGuide = lazy(() => delayLoading(import("@/features/dashboard/accordion")))

const AccordionPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AccordionGuide />
    </Suspense>
  )
}

export default AccordionPage
