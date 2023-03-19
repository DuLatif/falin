import TooltipGuide from "@/features/dashboard/tooltip";
import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const TooltipPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <TooltipGuide />
    </Suspense>
  );
};

export default TooltipPage;
