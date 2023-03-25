import CodeSnippet from "@/components/CodeSnippet";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";
import {
  sizeContainedButtons,
  sizeOutlinedButtons,
  sizeTextButtons,
} from "./_code/button-sizes";

const SizeButtonsGuide: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Button Sizes
      </Typography>
      <Stack direction="column" spacing={2}>
        <Box>
          <Typography fontWeight={"semiBold"} color="text.secondary">
            Contained Buttons
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button size="sm">Button SM</Button>
            <Button size="md">Button MD</Button>
            <Button size="lg">Button LG</Button>
            <Button size="xl">Button XL</Button>
            <Button size="2xl">Button 2XL</Button>
          </Stack>
          <CodeSnippet code={sizeContainedButtons} />
        </Box>
        <Box>
          <Typography fontWeight={"semiBold"} color="text.secondary">
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
          </Stack>
          <CodeSnippet code={sizeTextButtons} />
        </Box>
        <Box>
          <Typography fontWeight={"semiBold"} color="text.secondary">
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
          </Stack>
          <CodeSnippet code={sizeOutlinedButtons} />
        </Box>
      </Stack>
    </Card>
  );
};

export default SizeButtonsGuide;
