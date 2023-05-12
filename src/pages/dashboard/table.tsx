import { LoadingScreen } from "@/components/LoadingPage"
import React, { lazy, Suspense } from "react"
const TableGuide = lazy(() => import("@/features/dashboard/table"))

const TablePage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <TableGuide />
    </Suspense>
  )
}

export default TablePage
