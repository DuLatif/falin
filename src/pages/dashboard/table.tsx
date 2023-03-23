import TableGuide from "@/features/dashboard/table";
import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const TablePage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <TableGuide />
    </Suspense>
  );
};

export default TablePage;
