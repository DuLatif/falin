import { Box, Card, Chip, Stack, Typography } from "@mui/material"
import React from "react"
import classes from "./styles/ListEvents.module.scss"

const ListEvents: React.FC = () => {
  return (
    <Card className={classes.ListEvents}>
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={2}>
        List Events
      </Typography>
      <Stack direction="column" spacing={2}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Box key={item} className={classes.EventItem}>
            <Typography fontWeight={"semiBold"} mb={1}>
              First =DREAMS Programme
            </Typography>
            <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
              <Typography color="text.secondary" variant="body2">
                17 January 2022
              </Typography>
              <Chip label="Upcoming" color="primary" size="small" />
            </Stack>
          </Box>
        ))}
      </Stack>
    </Card>
  )
}

export default ListEvents
