import TypographyList from "@/features/dashboard/typography";
import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const TypographyPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <TypographyList />
    </Suspense>
  );
};

export default TypographyPage;
