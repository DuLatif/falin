import { LoadingScreen } from "@/components/LoadingPage"
import FormEditorGuide from "@/features/dashboard/form-editor"
import React, { Suspense } from "react"

const FormEditorPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <FormEditorGuide />
    </Suspense>
  )
}

export default FormEditorPage
