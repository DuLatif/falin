import { Box, Typography } from "@mui/material";
import React from "react";
import InputFileGuide from "./InputFileGuide";
import UploadFileGuide from "./UploadFileGuide";
import UploadFilePondGuide from "./UploadFilePondGuide";

const UploadFileGuidePage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Upload File Guide</Typography>
      <Box mt={4}>
        <InputFileGuide />
        <UploadFileGuide />
        <UploadFilePondGuide />
      </Box>
    </Box>
  );
};

export default UploadFileGuidePage;
