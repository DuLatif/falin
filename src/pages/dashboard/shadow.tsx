import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";
const ShadowGuide = lazy(() => import("@/features/dashboard/shadow"));

const ShadowPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ShadowGuide />
    </Suspense>
  );
};

export default ShadowPage;
