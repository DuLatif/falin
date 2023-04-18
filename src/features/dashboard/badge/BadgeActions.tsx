import CodeSnippet from "@/components/CodeSnippet"
import { Box, Card, Chip, Stack, Typography } from "@mui/material"
import { X } from "phosphor-react"
import React from "react"
import { badgeActionClickableCode, badgeActionDeleteableCode } from "./_code/badge-action"

const BadgeActionsGuide: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1" mb={1} fontWeight={"semiBold"}>
        Badge Actions
      </Typography>
      <Stack direction="column">
        <Box>
          <Typography fontWeight={"semiBold"} color={"text.secondary"} mb={1}>
            Badge Clickable
          </Typography>
          <Stack direction="row" spacing={2}>
            <Chip label="Badge Filled" onClick={() => alert("clicked")} />
            <Chip label="Badge Outlined" variant="outlined" onClick={() => alert("clicked")} />
          </Stack>
          <CodeSnippet code={badgeActionClickableCode} />
        </Box>
        <Box mt={2}>
          <Typography fontWeight={"semiBold"} color={"text.secondary"} mb={1}>
            Badge Deleteable
          </Typography>
          <Stack direction="row" gap={2} flexWrap="wrap">
            <Chip label="Badge Filled" onDelete={() => alert("deleted!")} />
            <Chip label="Badge Outlined" variant="outlined" onDelete={() => alert("deleted!")} />
            <Chip
              label="Badge Custom Icon"
              variant="outlined"
              onDelete={() => alert("deleted!")}
              deleteIcon={<X weight="bold" size={18} />}
            />
          </Stack>
          <CodeSnippet code={badgeActionDeleteableCode} />
        </Box>
      </Stack>
    </Card>
  )
}

export default BadgeActionsGuide
