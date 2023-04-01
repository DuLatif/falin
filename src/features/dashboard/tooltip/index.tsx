import { neutral } from "@/theme/colors"
import { Box, Card, Stack, Tooltip, Typography } from "@mui/material"
import React from "react"

const TooltipGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Tooltip Guide</Typography>
      <Card sx={{ mt: 4 }}>
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
        <Stack direction="row" spacing={4} mt={4}>
          <Tooltip
            title={
              <>
                <Typography variant="body2" fontWeight={"semiBold"} color={neutral[700]} sx={{ marginBottom: "4px" }}>
                  This is a tooltip
                </Typography>
                <Typography variant="body2" textAlign="justify">
                  Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user
                  understand meaning, function or alt-text.
                </Typography>
              </>
            }
          >
            <Typography>Long Tooltip Top</Typography>
          </Tooltip>
          <Tooltip
            title={
              <>
                <Typography variant="body2" fontWeight={"semiBold"} color={neutral[700]} sx={{ marginBottom: "4px" }}>
                  This is a tooltip
                </Typography>
                <Typography variant="body2" textAlign="justify">
                  Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user
                  understand meaning, function or alt-text.
                </Typography>
              </>
            }
            placement="bottom"
          >
            <Typography>Long Tooltip Bottom</Typography>
          </Tooltip>
          <Tooltip
            title={
              <>
                <Typography variant="body2" fontWeight={"semiBold"} color={neutral[700]} sx={{ marginBottom: "4px" }}>
                  This is a tooltip
                </Typography>
                <Typography variant="body2" textAlign="justify">
                  Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user
                  understand meaning, function or alt-text.
                </Typography>
              </>
            }
            placement="left"
          >
            <Typography>Long Tooltip Left</Typography>
          </Tooltip>
          <Tooltip
            title={
              <>
                <Typography variant="body2" fontWeight={"semiBold"} color={neutral[700]} sx={{ marginBottom: "4px" }}>
                  This is a tooltip
                </Typography>
                <Typography variant="body2" textAlign="justify">
                  Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user
                  understand meaning, function or alt-text.
                </Typography>
              </>
            }
            placement="right"
          >
            <Typography>Long Toolti Right</Typography>
          </Tooltip>
        </Stack>
      </Card>
    </Box>
  )
}

export default TooltipGuide
