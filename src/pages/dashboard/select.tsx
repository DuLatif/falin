import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";
const SelectGuide = lazy(() => import("@/features/dashboard/select"));

const SelectPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <SelectGuide />
    </Suspense>
  );
};

export default SelectPage;
