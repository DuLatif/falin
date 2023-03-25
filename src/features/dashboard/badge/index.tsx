import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BadgeActionsGuide from "./BadgeActions";
import BadgeColorsGuide from "./BadgeColors";
import BadgeSizesGuide from "./BadgeSizes";
import BadgeVariantsGuide from "./BadgeVariants";

const BadgeGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Badge Guide</Typography>
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item container direction={"column"} gap={4} md={7}>
            <BadgeColorsGuide />
            <BadgeSizesGuide />
          </Grid>
          <Grid item container direction={"column"} gap={4} md={5}>
            <BadgeVariantsGuide />
            <BadgeActionsGuide />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BadgeGuide;
