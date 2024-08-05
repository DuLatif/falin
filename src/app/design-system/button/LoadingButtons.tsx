import { Button, Card, CircularProgress, Stack, Typography } from "@mui/material"
import React from "react"
import { loadingButtonsCode } from "./_code/loading-buttons"
import CodeSnippet from "@/ui/components/CodeSnippet"

const LoadingButtonsGuide: React.FC = () => {
  return (
    <Card component="section">
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Loading Button
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button disabled>
          <CircularProgress />
        </Button>
        <Button disabled variant="text">
          <CircularProgress />
        </Button>
        <Button disabled variant="outlined">
          <CircularProgress />
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} mt={2}>
        <Button disabled data-shape="icon">
          <CircularProgress />
        </Button>
        <Button disabled variant="text" data-shape="icon">
          <CircularProgress />
        </Button>
        <Button disabled variant="outlined" data-shape="icon">
          <CircularProgress />
        </Button>
      </Stack>
      <CodeSnippet code={loadingButtonsCode} />
    </Card>
  )
}

export default LoadingButtonsGuide
