import SnackbarGuide from "@/features/dashboard/snackbar";
import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const SnackbarPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <SnackbarGuide />
    </Suspense>
  );
};

export default SnackbarPage;
