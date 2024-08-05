const baseContainer = (code: string) => {
  return `import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Smiley } from "phosphor-react";

const App : React.FC = () => {
  return (
    <Box>
      ${code}
    </Box>
  )
}`
}

export const buttonWithIconCode = baseContainer(`<Stack direction="row" spacing={2}>
          <Button startIcon={<Smiley size={22} weight="bold" />}>
            Button
          </Button>
          <Button endIcon={<Smiley size={22} weight="bold" />}>
            Button
          </Button>
          <Button
            startIcon={<Smiley size={22} weight="bold" />}
            endIcon={<Smiley size={22} weight="bold" />}
          >
            Button
          </Button>
        </Stack>`)

export const onlyIconButtonCode = baseContainer(`<Stack direction="row" spacing={2}>
          <Button variant="text" data-shape="icon" color="inherit">
            <Smiley size={22} weight="bold" />
          </Button>
          <Button variant="text" data-shape="icon" color="primary">
            <Smiley size={22} weight="bold" />
          </Button>
          <Button variant="text" data-shape="icon" color="secondary">
            <Smiley size={22} weight="bold" />
          </Button>
          <Button variant="text" data-shape="icon" color="success">
            <Smiley size={22} weight="bold" />
          </Button>
          <Button variant="text" data-shape="icon" color="info">
            <Smiley size={22} weight="bold" />
          </Button>
          <Button variant="text" data-shape="icon" color="warning">
            <Smiley size={22} weight="bold" />
          </Button>
          <Button variant="text" data-shape="icon" color="error">
            <Smiley size={22} weight="bold" />
          </Button>
        </Stack>`)
