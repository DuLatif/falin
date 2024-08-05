import { LoadingScreen } from "@/ui/sections/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { lazy, Suspense } from "react"
const TableGuide = lazy(() => delayLoading(import("@/app/design-system/table")))

const TablePage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <TableGuide />
    </Suspense>
  )
}

export default TablePage
