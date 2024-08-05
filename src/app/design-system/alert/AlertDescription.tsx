import { Alert, AlertTitle, Card, IconButton, Stack, Typography } from "@mui/material"
import { XCircle } from "phosphor-react"
import React from "react"
import { alertDescription } from "./_code/alert-description"
import CodeSnippet from "@/ui/components/CodeSnippet"

const AlertDescription: React.FC = () => {
  return (
    <Card component="section">
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Alert Description
      </Typography>
      <Stack direction="column" spacing={1} mb={2}>
        <Alert
          variant="outlined"
          severity="error"
          action={
            <IconButton color="error">
              <XCircle size={24} weight="bold" />
            </IconButton>
          }
        >
          <AlertTitle>There was a problem with that action</AlertTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </Alert>
        <Alert
          variant="outlined"
          severity="warning"
          action={
            <IconButton color="warning">
              <XCircle size={24} weight="bold" />
            </IconButton>
          }
        >
          <AlertTitle>Just to let you know this might be a problem</AlertTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </Alert>
        <Alert
          variant="outlined"
          severity="info"
          action={
            <IconButton color="info">
              <XCircle size={24} weight="bold" />
            </IconButton>
          }
        >
          <AlertTitle>We&apos;ve just released a new feature</AlertTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </Alert>
        <Alert
          variant="outlined"
          severity="success"
          action={
            <IconButton color="success">
              <XCircle size={24} weight="bold" />
            </IconButton>
          }
        >
          <AlertTitle>Successfully updated profile</AlertTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </Alert>
      </Stack>
      <CodeSnippet code={alertDescription} />
    </Card>
  )
}

export default AlertDescription
