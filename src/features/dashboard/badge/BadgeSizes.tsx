import CodeSnippet from "@/components/CodeSnippet"
import { Card, Chip, Stack, Typography } from "@mui/material"
import React from "react"
import { badgeSizesCode } from "./_code/badge-size"

const BadgeSizesGuide: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1" mb={1} fontWeight={"semiBold"}>
        Badge Sizes
      </Typography>
      <Stack direction="row" spacing={2}>
        <Chip label="Badge Medium" size="medium" />
        <Chip label="Badge Medium" size="medium" variant="outlined" />
        <Chip label="Badge Small" size="small" />
        <Chip label="Badge Small" size="small" variant="outlined" />
      </Stack>
      <CodeSnippet code={badgeSizesCode} />
    </Card>
  )
}

export default BadgeSizesGuide
