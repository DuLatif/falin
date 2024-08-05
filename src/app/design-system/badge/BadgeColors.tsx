import { Card, Chip, Stack, Typography } from "@mui/material"
import React from "react"
import { badgeColorCode } from "./_code/badge-color"
import CodeSnippet from "@/ui/components/CodeSnippet"

const BadgeColorsGuide: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1" mb={1} fontWeight={"semiBold"}>
        Badge Colors
      </Typography>
      <Stack direction="row" spacing={2}>
        <Chip label="Default" color="default" />
        <Chip label="Primary" color="primary" />
        <Chip label="Error" color="error" />
        <Chip label="Success" color="success" />
        <Chip label="Info" color="info" />
        <Chip label="Warning" color="warning" />
      </Stack>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Chip label="Default" variant="outlined" color="default" />
        <Chip label="Primary" variant="outlined" color="primary" />
        <Chip label="Error" variant="outlined" color="error" />
        <Chip label="Success" variant="outlined" color="success" />
        <Chip label="Info" variant="outlined" color="info" />
        <Chip label="Warning" variant="outlined" color="warning" />
      </Stack>
      <Stack direction="row" spacing={2} sx={{ my: 2 }}>
        <Chip label="Default" onDelete={() => alert("deleted!")} variant="outlined" color="default" />
        <Chip label="Primary" onDelete={() => alert("deleted!")} variant="outlined" color="primary" />
        <Chip label="Error" onDelete={() => alert("deleted!")} variant="outlined" color="error" />
        <Chip label="Success" onDelete={() => alert("deleted!")} variant="outlined" color="success" />
        <Chip label="Info" onDelete={() => alert("deleted!")} variant="outlined" color="info" />
        <Chip label="Warning" onDelete={() => alert("deleted!")} variant="outlined" color="warning" />
      </Stack>
      <CodeSnippet code={badgeColorCode} />
    </Card>
  )
}

export default BadgeColorsGuide
