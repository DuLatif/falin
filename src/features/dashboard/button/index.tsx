import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BasicButtons from "./BasicButtons";
import DisabledButtonsGuide from "./DisabledButtons";
import IconButtonsGuide from "./IconButtons";
import LoadingButtonsGuide from "./LoadingButtons";
import SizeButtonsGuide from "./SizeButtons";

const ButtonGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Button</Typography>
      <Box mt={4}></Box>
      <Grid container spacing={4}>
        <Grid item md={6}>
          <BasicButtons />
        </Grid>
        <Grid item md={6}>
          <DisabledButtonsGuide />
        </Grid>
        <Grid item md={7.5}>
          <SizeButtonsGuide />
        </Grid>
        <Grid item md={4.5}>
          <LoadingButtonsGuide />
        </Grid>
        <Grid item md={12}>
          <IconButtonsGuide />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ButtonGuide;
