import React, { useState } from "react"
import CardSection from "../ui/CardSection"
import { Stack, Button, Snackbar, Alert } from "@mui/material"
import CodeSnippet from "@/components/CodeSnippet/CodeSnippet"
import { snackbarVariantCode } from "./code/snackbar-variant"

const SnackbarVariantGuide: React.FC = () => {
  const [showSimpleSnackbar, setShowSimpleSnackbar] = useState(false)
  const [showStandardSnackbar, setShowStandardSnackbar] = useState(false)
  const [showOutlinedSnackbar, setShowOutlinedSnackbar] = useState(false)

  return (
    <CardSection title="Snackbar Variant">
      <Stack direction="row" spacing={2}>
        <Button onClick={() => setShowSimpleSnackbar(true)}>Simple Snackbar</Button>
        <Button onClick={() => setShowStandardSnackbar(true)}>Standard Snackbar</Button>
        <Button onClick={() => setShowOutlinedSnackbar(true)}>Outlined Snackbar</Button>
      </Stack>
      <CodeSnippet code={snackbarVariantCode} />
      <Snackbar
        open={showSimpleSnackbar}
        message="This is simple snackbar message"
        autoHideDuration={3000}
        onClose={() => setShowSimpleSnackbar(false)}
      />
      <Snackbar open={showStandardSnackbar} autoHideDuration={3000} onClose={() => setShowStandardSnackbar(false)}>
        <Alert severity="success" variant="standard" onClose={() => setShowStandardSnackbar(false)}>
          This is standard snackbar message
        </Alert>
      </Snackbar>
      <Snackbar open={showOutlinedSnackbar} autoHideDuration={3000} onClose={() => setShowOutlinedSnackbar(false)}>
        <Alert severity="success" variant="outlined" onClose={() => setShowOutlinedSnackbar(false)}>
          This is outlined snackbar message
        </Alert>
      </Snackbar>
    </CardSection>
  )
}

export default SnackbarVariantGuide
