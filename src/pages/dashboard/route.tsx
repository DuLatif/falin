import Content from "@/components/dashboard/Content"
import Sidebar from "@/components/dashboard/Sidebar"
import { Box, SxProps } from "@mui/material"
import React from "react"
import { Routes, Route } from "react-router-dom"
import Error404 from "../error/404"
import AlertPage from "./alert"
import AvatarPage from "./avatar"
import BadgePage from "./badge"
import ButtonPage from "./button"
import CheckboxPage from "./checkbox"
import ColorPage from "./color"
import HomePage from "./home"
import InputPage from "./input"
import ModalPage from "./modal"
import RadioPage from "./radio"
import SelectPage from "./select"
import ShadowPage from "./shadow"
import SnackbarPage from "./snackbar"
import TablePage from "./table"
import TooltipPage from "./tooltip"
import TypographyPage from "./typography"
import UploadFilePage from "./upload-file"
import CalendarPage from "./calendar"
import ChartPage from "./chart"
import AccordionPage from "./accordion"
import MapPage from "./map"
import SliderPage from "./slider"
import FormEditorPage from "./form-editor"

const styles: { root: SxProps } = {
  root: {
    display: "flex",
    flexDirection: "row",
    position: "fixed",
    width: "100vw",
  },
}

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
          <Route path={"/input"} element={<InputPage />} />
          <Route path={"/checkbox"} element={<CheckboxPage />} />
          <Route path={"/radio"} element={<RadioPage />} />
          <Route path={"/alert"} element={<AlertPage />} />
          <Route path={"/tooltip"} element={<TooltipPage />} />
          <Route path={"/select"} element={<SelectPage />} />
          <Route path={"/badge"} element={<BadgePage />} />
          <Route path={"/avatar"} element={<AvatarPage />} />
          <Route path={"/snackbar"} element={<SnackbarPage />} />
          <Route path={"/modal"} element={<ModalPage />} />
          <Route path={"/table"} element={<TablePage />} />\
          <Route path={"/upload-file"} element={<UploadFilePage />} />
          <Route path={"/calendar"} element={<CalendarPage />} />
          <Route path={"/chart"} element={<ChartPage />} />
          <Route path={"/accordion"} element={<AccordionPage />} />
          <Route path={"/map"} element={<MapPage />} />
          <Route path={"/slider"} element={<SliderPage />} />
          <Route path={"/form-editor"} element={<FormEditorPage />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </Content>
    </Box>
  )
}

export default DashboardRoute
