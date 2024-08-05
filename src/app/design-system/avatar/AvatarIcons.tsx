import { Avatar, Card, Stack, Typography } from "@mui/material"
import { User, UserCircle, Users } from "phosphor-react"
import React from "react"
import { avatarIconsCode } from "./_code/avatar-icons"
import CodeSnippet from "@/ui/components/CodeSnippet"

const AvatarIcons: React.FC = () => {
  return (
    <Card component="section">
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Avatar Icon
      </Typography>
      <Stack direction="row" spacing={2}>
        <Avatar>
          <User />
        </Avatar>
        <Avatar>
          <UserCircle />
        </Avatar>
        <Avatar>
          <Users />
        </Avatar>
      </Stack>
      <CodeSnippet code={avatarIconsCode} />
    </Card>
  )
}

export default AvatarIcons
