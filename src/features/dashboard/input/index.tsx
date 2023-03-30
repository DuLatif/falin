import { Box, Typography } from "@mui/material";
import React from "react";
import BaseInputGuide from "./BasicInput";
import InputAdormentGuide from "./InputAdorment";
import InputDateGuide from "./InputDateGuide";
import InputHelperTextGuide from "./InputHelperText";
import InputMultilineGuide from "./InputMultiline";

const InputGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Input Guide</Typography>
      <Box mt={4}></Box>
      <BaseInputGuide />
      <InputAdormentGuide />
      <InputHelperTextGuide />
      <InputMultilineGuide />
      <InputDateGuide />
    </Box>
  );
};

export default InputGuide;
