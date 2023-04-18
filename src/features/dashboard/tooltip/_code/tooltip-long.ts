export const tooltipLongCode = `import React from 'react';
import { neutral } from "@/theme/colors"
import { Card, Stack, Tooltip, Typography } from "@mui/material"

const TooltipMessage: React.ReactNode = (
  <>
    <Typography variant="body2" fontWeight={"semiBold"} color={neutral[700]} sx={{ marginBottom: "4px" }}>
      This is a tooltip
    </Typography>
    <Typography variant="body2" textAlign="justify">
      Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand
      meaning, function or alt-text.
    </Typography>
  </>
)

const App: React.FC = () => {
  return (
    <Card component="section">
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Long Tooltip
      </Typography>
      <Stack direction="row" spacing={4} mt={4} flexWrap={"wrap"}>
        <Tooltip title={TooltipMessage}>
          <Typography>Long Tooltip Top</Typography>
        </Tooltip>
        <Tooltip title={TooltipMessage} placement="bottom">
          <Typography>Long Tooltip Bottom</Typography>
        </Tooltip>
        <Tooltip title={TooltipMessage} placement="left">
          <Typography>Long Tooltip Left</Typography>
        </Tooltip>
        <Tooltip title={TooltipMessage} placement="right">
          <Typography>Long Toolti Right</Typography>
        </Tooltip>
      </Stack>
      <CodeSnippet code={tooltipLongCode} />
    </Card>
  )
}

export default App
`
