export const avatarVariantsCode = `import React from 'react';
import { Avatar, Card, Stack, Typography } from "@mui/material"
import { User, UserCircle, Users } from "phosphor-react"

const App : React.FC = () => {
  return (
    <Card component="section">
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Avatar Variants
      </Typography>
      <Stack direction={"row"} spacing={2}>
        <Avatar>
          <User />
        </Avatar>
        <Avatar variant="square">
          <UserCircle />
        </Avatar>
        <Avatar variant="rounded">
          <Users />
        </Avatar>
      </Stack>
    </Card>
  )
}
`
