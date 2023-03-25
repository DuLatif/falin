import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";
const CheckboxGuide = lazy(() => import("@/features/dashboard/checkbox"));

const CheckboxPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <CheckboxGuide />
    </Suspense>
  );
};

export default CheckboxPage;
