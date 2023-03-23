import ModalGuide from "@/features/dashboard/modal";
import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const ModalPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ModalGuide />
    </Suspense>
  );
};

export default ModalPage;
