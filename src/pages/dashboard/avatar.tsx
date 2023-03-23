import AvatarGuide from "@/features/dashboard/avatar";
import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const AvatarPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <AvatarGuide />
    </Suspense>
  );
};

export default AvatarPage;
