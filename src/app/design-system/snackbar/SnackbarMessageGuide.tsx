import React, { useState } from "react"
import CardSection from "../ui/CardSection"
import { Stack, Button, Snackbar, Alert } from "@mui/material"
import { snackbarMessageCode } from "./code/snackbar-message"
import CodeSnippet from "@/ui/components/CodeSnippet"

const SnackbarMessageGuide: React.FC = () => {
  const [showSnackbarError, setShowSnackbarError] = useState(false)
  const [showSnackbarWarning, setShowSnackbarWarning] = useState(false)
  const [showSnackbarInfo, setShowSnackbarInfo] = useState(false)
  const [showSnackbarSuccess, setShowSnackbarSuccess] = useState(false)

  return (
    <CardSection title="Snackbar Message">
      <Stack direction="row" spacing={2}>
        <Button color="error" onClick={() => setShowSnackbarError(true)}>
          Error
        </Button>
        <Button color="warning" onClick={() => setShowSnackbarWarning(true)}>
          Warning
        </Button>
        <Button color="info" onClick={() => setShowSnackbarInfo(true)}>
          Info
        </Button>
        <Button color="success" onClick={() => setShowSnackbarSuccess(true)}>
          Success
        </Button>
      </Stack>
      <CodeSnippet code={snackbarMessageCode} />

      <Snackbar open={showSnackbarError} onClose={() => setShowSnackbarError(false)}>
        <Alert severity="error" onClose={() => setShowSnackbarError(false)}>
          This is a error message!
        </Alert>
      </Snackbar>
      <Snackbar open={showSnackbarWarning} onClose={() => setShowSnackbarWarning(false)}>
        <Alert severity="warning" onClose={() => setShowSnackbarWarning(false)}>
          This is a warning message!
        </Alert>
      </Snackbar>
      <Snackbar open={showSnackbarInfo} onClose={() => setShowSnackbarInfo(false)}>
        <Alert severity="info" onClose={() => setShowSnackbarInfo(false)}>
          This is a info message!
        </Alert>
      </Snackbar>
      <Snackbar open={showSnackbarSuccess} onClose={() => setShowSnackbarSuccess(false)}>
        <Alert severity="success" onClose={() => setShowSnackbarSuccess(false)}>
          This is a success message!
        </Alert>
      </Snackbar>
    </CardSection>
  )
}

export default SnackbarMessageGuide
