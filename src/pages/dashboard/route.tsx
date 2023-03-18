import Content from "@/components/dashboard/Content";
import Sidebar from "@/components/dashboard/Sidebar";
import { Box, SxProps } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "../error/404";
import ButtonPage from "./button";
import ColorPage from "./color";
import HomePage from "./home";
import ShadowPage from "./shadow";
import TypographyPage from "./typography";

const styles: { root: SxProps } = {
  root: {
    display: "flex",
    flexDirection: "row",
  },
};

const DashboardRoute: React.FC = () => {
  return (
    <Box sx={styles.root}>
      <Sidebar />
      <Content>
        <Routes>
          <Route path={"/home"} element={<HomePage />} />
          <Route path={"/typography"} element={<TypographyPage />} />
          <Route path={"/color"} element={<ColorPage />} />
          <Route path={"/button"} element={<ButtonPage />} />
          <Route path={"/shadow"} element={<ShadowPage />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </Content>
    </Box>
  );
};

export default DashboardRoute;
