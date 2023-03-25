import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";
const RadioGuide = lazy(() => import("@/features/dashboard/radio"));

const RadioPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <RadioGuide />
    </Suspense>
  );
};

export default RadioPage;
