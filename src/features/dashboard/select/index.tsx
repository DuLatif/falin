import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BasicSelectGuide from "./BasicSelect";
import SelectGroupGuide from "./SelectGroup";

const SelectGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Select Guide</Typography>
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item md={12}>
            <BasicSelectGuide />
          </Grid>
          <Grid item md={12}>
            <SelectGroupGuide />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SelectGuide;
