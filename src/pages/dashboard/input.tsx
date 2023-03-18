import InputGuide from "@/features/dashboard/input";
import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const InputPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <InputGuide />
    </Suspense>
  );
};

export default InputPage;
