import InputDate from "@/components/InputDate";
import { Card, Grid, Typography } from "@mui/material";
import React from "react";

const InputDateGuide: React.FC = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <Typography variant="subtitle1" fontWeight={"semiBold"}>
        Input Adornment
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <InputDate />
        </Grid>
      </Grid>
    </Card>
  );
};

export default InputDateGuide;
