import Shadow from "@/features/dashboard/shadow";
import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const ShadowPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Shadow />
    </Suspense>
  );
};

export default ShadowPage;
