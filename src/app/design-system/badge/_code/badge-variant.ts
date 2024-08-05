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

export const badgeVariantCode = baseContainer(`<Typography variant="subtitle1" mb={1}>
        Badge Variants
      </Typography>
      <Stack direction="row" spacing={2}>
        <Chip label="Badge Filled" />
        <Chip label="Badge Outlined" variant="outlined" />
      </Stack>`)
