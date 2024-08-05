export const avatarLetterCode = `import React from 'react';
import { Avatar, Card, Stack, Typography } from "@mui/material"

const App : React.FC = () => {
  return (
    <Card component="section">
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Avatar Letter
      </Typography>
      <Stack direction="row" spacing={2}>
        <Avatar>A</Avatar>
        <Avatar sx={{ bgcolor: primary[500] }}>B</Avatar>
        <Avatar sx={{ bgcolor: success[500] }}>CD</Avatar>
      </Stack>
    </Card>
  )
}
`
