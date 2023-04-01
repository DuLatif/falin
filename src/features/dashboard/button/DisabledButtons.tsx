import CodeSnippet from "@/components/CodeSnippet"
import { Box, Button, Card, Stack, Typography } from "@mui/material"
import React from "react"
import { disabledContainedButtons, disabledOutlinedButtons, disabledTextButtons } from "./_code/disabled-buttons"

const DisabledButtonsGuide: React.FC = () => {
  return (
    <Card component="section">
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Disabled Buttons
      </Typography>
      <Stack direction="column" spacing={2}>
        <Box>
          <Typography fontWeight={"semiBold"} color="text.secondary" mb={1}>
            Contained Buttons
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button disabled color="inherit">
              Inherit
            </Button>
            <Button disabled color="primary">
              Primary
            </Button>
            <Button disabled color="secondary">
              Secondary
            </Button>
            <Button disabled color="success">
              Success
            </Button>
            <Button disabled color="info">
              Info
            </Button>
            <Button disabled color="warning">
              Warning
            </Button>
            <Button disabled color="error">
              Error
            </Button>
          </Stack>
          <CodeSnippet code={disabledContainedButtons} />
        </Box>
        <Box>
          <Typography fontWeight={"semiBold"} color="text.secondary" mb={1}>
            Text Buttons
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button disabled variant="text" color="inherit">
              Inherit
            </Button>
            <Button disabled variant="text" color="primary">
              Primary
            </Button>
            <Button disabled variant="text" color="secondary">
              Secondary
            </Button>
            <Button disabled variant="text" color="success">
              Success
            </Button>
            <Button disabled variant="text" color="info">
              Info
            </Button>
            <Button disabled variant="text" color="warning">
              Warning
            </Button>
            <Button disabled variant="text" color="error">
              Error
            </Button>
          </Stack>
          <CodeSnippet code={disabledTextButtons} />
        </Box>
        <Box>
          <Typography fontWeight={"semiBold"} color="text.secondary" mb={1}>
            Outlined Buttons
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button disabled variant="outlined" color="inherit">
              Inherit
            </Button>
            <Button disabled variant="outlined" color="primary">
              Primary
            </Button>
            <Button disabled variant="outlined" color="secondary">
              Secondary
            </Button>
            <Button disabled variant="outlined" color="success">
              Success
            </Button>
            <Button disabled variant="outlined" color="info">
              Info
            </Button>
            <Button disabled variant="outlined" color="warning">
              Warning
            </Button>
            <Button disabled variant="outlined" color="error">
              Error
            </Button>
          </Stack>
          <CodeSnippet code={disabledOutlinedButtons} />
        </Box>
      </Stack>
    </Card>
  )
}

export default DisabledButtonsGuide
