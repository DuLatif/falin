import { Alert, Card, Stack, Typography } from "@mui/material"
import React from "react"
import { alertOutlined } from "./_code/alert-outlined"
import CodeSnippet from "@/ui/components/CodeSnippet"

const AlertOutlined: React.FC = () => {
  return (
    <Card component="section">
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Alert Outlined
      </Typography>
      <Stack direction="column" spacing={1} mb={2}>
        <Alert variant="outlined" severity="error">
          This is an error alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is an error alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="info">
          This is an error alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="success">
          This is an error alert — check it out!
        </Alert>
      </Stack>
      <CodeSnippet code={alertOutlined} />
    </Card>
  )
}

export default AlertOutlined
