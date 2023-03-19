import AlertGuide from "@/features/dashboard/alert";
import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const AlertPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <AlertGuide />
    </Suspense>
  );
};

export default AlertPage;
