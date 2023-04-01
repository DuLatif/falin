export const loadingButtonsCode = `import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

const App : React.FC = () => {
  return (
    <Box>
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
    </Box>
  )
}`
