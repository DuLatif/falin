import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";
const AvatarGuide = lazy(() => import("@/features/dashboard/avatar"));

const AvatarPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <AvatarGuide />
    </Suspense>
  );
};

export default AvatarPage;
