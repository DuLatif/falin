import { LoadingScreen } from "@/components/LoadingPage"
import React, { lazy, Suspense } from "react"
const UploadFileGuide = lazy(() => import("@/features/dashboard/upload-file"))

const UploadFilePage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <UploadFileGuide />
    </Suspense>
  )
}

export default UploadFilePage
