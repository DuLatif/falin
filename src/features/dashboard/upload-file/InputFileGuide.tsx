import InputFile from "@/components/InputFile";
import { Card, Grid, Typography } from "@mui/material";
import React from "react";

const InputFileGuide: React.FC = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <Typography variant="subtitle1" fontWeight={"semiBold"}>
        Input File
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <InputFile
            label="Documents"
            required
            accept="image/*,application/pdf"
          />
        </Grid>
        <Grid item md={6}>
          <InputFile
            label="Documents multiple"
            required
            multiple
            placeholder="Upload File"
            accept="image/*,application/pdf"
          />
        </Grid>
        <Grid item md={6}>
          <InputFile
            label="Documents"
            required
            accept="image/*,application/pdf"
            helperText="This is a hint to help user"
          />
        </Grid>
        <Grid item md={6}>
          <InputFile
            label="Documents multiple"
            required
            accept="image/*,application/pdf"
            error
            multiple
            helperText="This is error message"
          />
        </Grid>
        <Grid item md={6}>
          <InputFile
            label="Documents"
            disabled
            accept="image/*,application/pdf"
            helperText="This is a disabled input"
          />
        </Grid>
        <Grid item md={6}>
          <InputFile
            label="Documents multiple"
            required
            accept="image/*,application/pdf"
            multiple
            helperText="Custom button color"
            color="error"
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default InputFileGuide;
