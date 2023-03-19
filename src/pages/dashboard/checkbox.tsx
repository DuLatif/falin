import CheckboxGuide from "@/features/dashboard/checkbox";
import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const CheckboxPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <CheckboxGuide />
    </Suspense>
  );
};

export default CheckboxPage;
