import Color from "@/features/dashboard/color";
import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const ColorPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Color />
    </Suspense>
  );
};

export default ColorPage;
