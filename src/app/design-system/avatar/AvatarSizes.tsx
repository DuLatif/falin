import { Avatar, Card, Stack, Typography } from "@mui/material"
import React from "react"
import { avatarSizesCode } from "./_code/avatar-sizes"
import CodeSnippet from "@/ui/components/CodeSnippet"

const AvatarSizes: React.FC = () => {
  return (
    <Card component="section">
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Avatar Sizes
      </Typography>
      <Stack direction={"row"} spacing={2}>
        <Avatar
          src="https://i.pinimg.com/564x/7e/24/7c/7e247c5bf0e7996c21ba6ca93c6ea74c.jpg"
          sx={{ width: 24, height: 24 }}
        />
        <Avatar src="https://i.pinimg.com/564x/7e/24/7c/7e247c5bf0e7996c21ba6ca93c6ea74c.jpg" />
        <Avatar
          src="https://i.pinimg.com/564x/7e/24/7c/7e247c5bf0e7996c21ba6ca93c6ea74c.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </Stack>
      <CodeSnippet code={avatarSizesCode} />
    </Card>
  )
}

export default AvatarSizes
