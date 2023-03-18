import ButtonGuide from "@/features/dashboard/button";
import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const ButtonPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ButtonGuide />
    </Suspense>
  );
};

export default ButtonPage;
