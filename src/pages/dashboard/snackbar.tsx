import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";
const SnackbarGuide = lazy(() => import("@/features/dashboard/snackbar"));

const SnackbarPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <SnackbarGuide />
    </Suspense>
  );
};

export default SnackbarPage;
