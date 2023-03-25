import React, { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import styles from "./_.module.scss";

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box className={styles.Content} component="main">
      {children}
    </Box>
  );
};

export default Content;
