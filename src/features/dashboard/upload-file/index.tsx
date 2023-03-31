import { Box, Typography } from "@mui/material";
import React from "react";
import InputFileGuide from "./InputFileGuide";

const UploadFileGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Upload File Guide</Typography>
      <Box mt={4}>
        <InputFileGuide />
      </Box>
    </Box>
  );
};

export default UploadFileGuide;
