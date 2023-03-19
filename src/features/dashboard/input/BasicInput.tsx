import CodeSnippet from "@/components/CodeSnippet";
import InputGroup from "@/components/InputGroup";
import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import {
  baseInputAmount,
  baseInputDisabled,
  baseInputName,
  baseInputReadonly,
} from "./_code/code-snippet";

const BasicInput: React.FC = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <Typography variant="subtitle1" fontWeight={"semiBold"}>
        Basic Input
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Box>
            <InputGroup label="Name" placeholder="Full Name" />
          </Box>
          <CodeSnippet code={baseInputName} />
        </Grid>
        <Grid item md={6}>
          <Box sx={{ width: "100%" }}>
            <InputGroup
              label="Amount"
              placeholder="Donation Amount"
              type="number"
            />
          </Box>
          <CodeSnippet code={baseInputAmount} />
        </Grid>
        <Grid item md={6}>
          <Box sx={{ width: "100%" }}>
            <InputGroup
              label="Disabled Input"
              placeholder="This is value"
              type="text"
              disabled
            />
          </Box>
          <CodeSnippet code={baseInputDisabled} />
        </Grid>
        <Grid item md={6}>
          <Box sx={{ width: "100%" }}>
            <InputGroup
              label="Readonly input"
              placeholder="This is value"
              readOnly
            />
          </Box>
          <CodeSnippet code={baseInputReadonly} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default BasicInput;
