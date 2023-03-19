import RadioGuide from "@/features/dashboard/radio";
import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const RadioPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <RadioGuide />
    </Suspense>
  );
};

export default RadioPage;
