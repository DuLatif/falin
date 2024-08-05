import { Alert, Card, Stack, Typography } from "@mui/material"
import React from "react"
import { alertFilled } from "./_code/alert-filled"
import CodeSnippet from "@/ui/components/CodeSnippet"

const AlertFilled: React.FC = () => {
  return (
    <Card component="section">
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Alert Filled
      </Typography>
      <Stack direction="column" spacing={1} mb={2}>
        <Alert variant="filled" severity="error">
          This is an error alert — check it out!
        </Alert>
        <Alert variant="filled" severity="warning">
          This is an error alert — check it out!
        </Alert>
        <Alert variant="filled" severity="info">
          This is an error alert — check it out!
        </Alert>
        <Alert variant="filled" severity="success">
          This is an error alert — check it out!
        </Alert>
      </Stack>
      <CodeSnippet code={alertFilled} />
    </Card>
  )
}

export default AlertFilled
