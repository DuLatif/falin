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

export const sizeContainedButtons =
  baseContainer(`<Typography fontWeight={"semiBold"} color="text.secondary">
        Contained Buttons
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button size="sm">Button SM</Button>
        <Button size="md">Button MD</Button>
        <Button size="lg">Button LG</Button>
        <Button size="xl">Button XL</Button>
        <Button size="2xl">Button 2XL</Button>
      </Stack>`);

export const sizeTextButtons =
  baseContainer(`<Typography fontWeight={"semiBold"} color="text.secondary">
        Text Buttons
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="text" size="sm">
          Button SM
        </Button>
        <Button variant="text" size="md">
          Button MD
        </Button>
        <Button variant="text" size="lg">
          Button LG
        </Button>
        <Button variant="text" size="xl">
          Button XL
        </Button>
        <Button variant="text" size="2xl">
          Button 2XL
        </Button>
      </Stack>`);

export const sizeOutlinedButtons =
  baseContainer(`<Typography fontWeight={"semiBold"} color="text.secondary">
        Outlined Buttons
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="outlined" size="sm">
          Button SM
        </Button>
        <Button variant="outlined" size="md">
          Button MD
        </Button>
        <Button variant="outlined" size="lg">
          Button LG
        </Button>
        <Button variant="outlined" size="xl">
          Button XL
        </Button>
        <Button variant="outlined" size="2xl">
          Button 2XL
        </Button>
      </Stack>`);
