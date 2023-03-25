import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";

const BasicButtonsGuide: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Basic Button
      </Typography>
      <Stack direction="column" spacing={2}>
        <Box>
          <Typography fontWeight={"semiBold"} color="text.secondary" mb={1}>
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
          </Stack>
        </Box>
        <Box>
          <Typography fontWeight={"semiBold"} color="text.secondary" mb={1}>
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
          </Stack>
        </Box>
        <Box>
          <Typography fontWeight={"semiBold"} color="text.secondary" mb={1}>
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
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};

export default BasicButtonsGuide;
