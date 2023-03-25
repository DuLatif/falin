const baseContainer = (code: string) => {
  return `import React from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";

const App : React.FC = () => {
  return (
    <Box>
      ${code}
    </Box>
  )
}`;
};

export const badgeSizesCode =
  baseContainer(`<Typography variant="subtitle1" mb={1}>
        Badge Sizes
      </Typography>
      <Stack direction="row" spacing={2}>
        <Chip label="Badge Medium" size="medium" />
        <Chip label="Badge Medium" size="medium" variant="outlined" />
        <Chip label="Badge Small" size="small" />
        <Chip label="Badge Small" size="small" variant="outlined" />
      </Stack>`);
