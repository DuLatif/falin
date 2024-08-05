import { LoadingScreen } from "@/ui/views/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { Suspense, lazy } from "react"
const AccordionGuide = lazy(() => delayLoading(import("@/app/design-system/accordion")))

const AccordionPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AccordionGuide />
    </Suspense>
  )
}

export default AccordionPage
