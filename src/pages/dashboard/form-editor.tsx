import { LoadingScreen } from "@/ui/views/LoadingPage"
import { delayLoading } from "@/utils/delay-loading"
import React, { Suspense, lazy } from "react"
const FormEditorGuide = lazy(() => delayLoading(import("@/app/design-system/form-editor")))

const FormEditorPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <FormEditorGuide />
    </Suspense>
  )
}

export default FormEditorPage
