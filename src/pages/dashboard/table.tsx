import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";
const TableGuide = lazy(() => import("@/features/dashboard/table"));

const TablePage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <TableGuide />
    </Suspense>
  );
};

export default TablePage;
