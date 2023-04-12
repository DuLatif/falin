import FormEditorGuide from "@/features/dashboard/form-editor"
import { CircularProgress } from "@mui/material"
import React, { Suspense } from "react"

const FormEditorPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <FormEditorGuide />
    </Suspense>
  )
}

export default FormEditorPage
