import { Box, Typography } from "@mui/material";
import React from "react";
import InputFileGuide from "./InputFileGuide";
import UploadFileGuide from "./UploadFileGuide";

const UploadFileGuidePage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Upload File Guide</Typography>
      <Box mt={4}>
        <InputFileGuide />
        <UploadFileGuide />
      </Box>
    </Box>
  );
};

export default UploadFileGuidePage;
