const baseContainer = (code: string) => {
  return `import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

const App : React.FC = () => {
  return (
    <Box>
      ${code}
    </Box>
  )
}`;
};

export const disabledContainedButtons =
  baseContainer(`<Typography fontWeight={"semiBold"} color="text.secondary" mb={1}>
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
      </Stack>`);

export const disabledTextButtons =
  baseContainer(`<Typography fontWeight={"semiBold"} color="text.secondary" mb={1}>
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
      </Stack>`);

export const disabledOutlinedButtons =
  baseContainer(`<Typography fontWeight={"semiBold"} color="text.secondary" mb={1}>
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
      </Stack>`);
