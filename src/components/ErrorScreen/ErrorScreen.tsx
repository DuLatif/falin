import { ArrowBack } from "@mui/icons-material"
import { Box, Button, Stack, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import classes from "./_.module.scss"
import { combineClasses } from "@/utils/styles"

export type TErrorScreen = "page" | "screen"
export interface IErrorScreenProps {
  type?: TErrorScreen
  code: number
  title: string
  subtitle?: string
}
const ErrorScreen: React.FC<IErrorScreenProps> = ({ type = "page", code, title, subtitle }) => {
  const navigate = useNavigate()

  return (
    <Box className={combineClasses([classes.Container, type === "screen" && classes.Screen])}>
      <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} sx={{ height: "100vh" }} spacing={5}>
        <Typography className={classes.ErrorCode}>{code}</Typography>
        <Box sx={{ textAlign: "center", paddingBottom: "24px", paddingTop: "32px" }}>
          <Typography variant="h3" fontWeight={"bold"} mb={3}>
            {title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {subtitle}
          </Typography>
        </Box>
        <Button size="xl" startIcon={<ArrowBack />} onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Stack>
    </Box>
  )
}

export default ErrorScreen
