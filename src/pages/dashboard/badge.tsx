import BadgeGuide from "@/features/dashboard/badge";
import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const BadgePage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <BadgeGuide />
    </Suspense>
  );
};

export default BadgePage;
