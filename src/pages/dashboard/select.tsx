import SelectGuide from "@/features/dashboard/select";
import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const SelectPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <SelectGuide />
    </Suspense>
  );
};

export default SelectPage;
