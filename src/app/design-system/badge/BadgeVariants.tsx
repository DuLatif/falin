import { Card, Chip, Stack, Typography } from "@mui/material"
import React from "react"
import { badgeVariantCode } from "./_code/badge-variant"
import CodeSnippet from "@/ui/components/CodeSnippet"

const BadgeVariantsGuide: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1" mb={1} fontWeight={"semiBold"}>
        Badge Variants
      </Typography>
      <Stack direction="row" spacing={2}>
        <Chip label="Badge Filled" />
        <Chip label="Badge Outlined" variant="outlined" />
      </Stack>
      <CodeSnippet code={badgeVariantCode} />
    </Card>
  )
}

export default BadgeVariantsGuide
