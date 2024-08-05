const baseContainer = (code: string) => {
  return `import React from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";

const App : React.FC = () => {
  return (
    <Box>
      ${code}
    </Box>
  )
}`
}

export const badgeColorCode = baseContainer(`<Typography variant="subtitle1" mb={1}>
        Badge Colors
      </Typography>
      <Stack direction="row" spacing={2}>
        <Chip label="Default" color="default" />
        <Chip label="Primary" color="primary" />
        <Chip label="Error" color="error" />
        <Chip label="Success" color="success" />
        <Chip label="Info" color="info" />
        <Chip label="Warning" color="warning" />
      </Stack>`)
