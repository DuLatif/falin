import UploadFile from "@/components/UploadFile"
import { Card, Typography } from "@mui/material"
import React from "react"

const UploadFileGuide: React.FC = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Upload File Guide
      </Typography>
      <UploadFile placeholder=".CSV (max. 5MB)" />
    </Card>
  )
}

export default UploadFileGuide
