import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";
const UploadFileGuide = lazy(() => import("@/features/dashboard/upload-file"));

const UploadFilePage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <UploadFileGuide />
    </Suspense>
  );
};

export default UploadFilePage;
