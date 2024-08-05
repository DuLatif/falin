export const tooltipShortCode = `import React from 'react';
import { Card, Stack, Tooltip, Typography } from "@mui/material"

const App: React.FC = () => {
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
    </Card>
  )
}

export default App
`
