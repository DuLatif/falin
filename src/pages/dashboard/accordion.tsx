import { CircularProgress } from "@mui/material"
import React, { Suspense, lazy } from "react"
const AccordionGuide = lazy(() => import("@/features/dashboard/accordion"))

const AccordionPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <AccordionGuide />
    </Suspense>
  )
}

export default AccordionPage
