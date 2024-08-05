import { Card, Stack, Tooltip, Typography } from "@mui/material"
import React from "react"
import { tooltipShortCode } from "./_code/tooltip-short"
import CodeSnippet from "@/ui/components/CodeSnippet"

const TooltipShort: React.FC = () => {
  return (
    <Card component="section">
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Default Tooltip
      </Typography>
      <Stack direction="row" spacing={4}>
        <Tooltip title="This is a tooltip">
          <Typography>Tooltip Top</Typography>
        </Tooltip>
        <Tooltip title="This is a tooltip" placement="bottom">
          <Typography>Tooltip Bottom</Typography>
        </Tooltip>
        <Tooltip title="This is a tooltip" placement="left">
          <Typography>Tooltip Left</Typography>
        </Tooltip>
        <Tooltip title="This is a tooltip" placement="right">
          <Typography>Toolti Right</Typography>
        </Tooltip>
      </Stack>
      <CodeSnippet code={tooltipShortCode} />
    </Card>
  )
}

export default TooltipShort
