const baseContainer = (code: string) => {
  return `import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

const App : React.FC = () => {
  return (
    <Box>
      ${code}
    </Box>
  )
}`
}

export const basicContainedButtons = baseContainer(`<Typography fontWeight={"semiBold"} color="text.secondary" mb={1}>
        Contained Buttons
      </Typography>
      <Stack direction="row" spacing={1}>
        <Button color="inherit">Inherit</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="info">Info</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
      </Stack>`)

export const basicTextButtons = baseContainer(`<Typography fontWeight={"semiBold"} color="text.secondary" mb={1}>
        Text Buttons
      </Typography>
      <Stack direction="row" spacing={1}>
        <Button variant="text" color="inherit">
          Inherit
        </Button>
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
      </Stack>`)

export const basicOutlinedButtons = baseContainer(`<Typography fontWeight={"semiBold"} color="text.secondary" mb={1}>
        Outlined Buttons
      </Typography>
      <Stack direction="row" spacing={1}>
        <Button variant="outlined" color="inherit">
          Inherit
        </Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>`)
