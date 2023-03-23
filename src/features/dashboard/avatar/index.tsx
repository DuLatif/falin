import { primary, success } from "@/theme/colors";
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  Stack,
  Typography,
} from "@mui/material";
import { User, UserCircle, Users } from "phosphor-react";
import React from "react";

const AvatarGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Avatar Guide</Typography>
      <Box mt={4}>
        <Card>
          <Stack direction={"column"} spacing={3}>
            <Box>
              <Typography variant="subtitle1">Image Avatar</Typography>
              <Stack direction="row" spacing={2}>
                <Avatar src="https://i.pinimg.com/564x/dc/f2/55/dcf2552a4150988f92f7d5ca1c2d7c7e.jpg" />
                <Avatar src="https://i.pinimg.com/564x/87/2f/b2/872fb29d50657c88487be1e736974737.jpg" />
                <Avatar src="https://i.pinimg.com/564x/7e/24/7c/7e247c5bf0e7996c21ba6ca93c6ea74c.jpg" />
              </Stack>
            </Box>
            <Box>
              <Typography variant="subtitle1">Letter Avatars</Typography>
              <Stack direction="row" spacing={2}>
                <Avatar>A</Avatar>
                <Avatar sx={{ bgcolor: primary[500] }}>B</Avatar>
                <Avatar sx={{ bgcolor: success[500] }}>CD</Avatar>
              </Stack>
            </Box>
            <Box>
              <Typography variant="subtitle1">Sizes</Typography>
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
            </Box>
            <Box>
              <Typography variant="subtitle1">Icon Avatars</Typography>
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
            </Box>
            <Box>
              <Typography variant="subtitle1">Variants</Typography>
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
            </Box>
            <Box>
              <Typography variant="subtitle1">Grouped</Typography>
              <Stack direction={"row"}>
                <AvatarGroup max={6} total={20}>
                  <Avatar src="https://i.pinimg.com/564x/dc/f2/55/dcf2552a4150988f92f7d5ca1c2d7c7e.jpg" />
                  <Avatar src="https://i.pinimg.com/564x/87/2f/b2/872fb29d50657c88487be1e736974737.jpg" />
                  <Avatar src="https://i.pinimg.com/564x/7e/24/7c/7e247c5bf0e7996c21ba6ca93c6ea74c.jpg" />
                  <Avatar src="https://i.pinimg.com/564x/dc/f2/55/dcf2552a4150988f92f7d5ca1c2d7c7e.jpg" />
                  <Avatar src="https://i.pinimg.com/564x/87/2f/b2/872fb29d50657c88487be1e736974737.jpg" />
                  <Avatar src="https://i.pinimg.com/564x/7e/24/7c/7e247c5bf0e7996c21ba6ca93c6ea74c.jpg" />
                  <Avatar src="https://i.pinimg.com/564x/dc/f2/55/dcf2552a4150988f92f7d5ca1c2d7c7e.jpg" />
                  <Avatar src="https://i.pinimg.com/564x/87/2f/b2/872fb29d50657c88487be1e736974737.jpg" />
                  <Avatar src="https://i.pinimg.com/564x/7e/24/7c/7e247c5bf0e7996c21ba6ca93c6ea74c.jpg" />
                </AvatarGroup>
              </Stack>
              <Stack direction={"row"}>
                <AvatarGroup max={6} total={20} variant="rounded">
                  <Avatar src="https://i.pinimg.com/564x/dc/f2/55/dcf2552a4150988f92f7d5ca1c2d7c7e.jpg" />
                  <Avatar src="https://i.pinimg.com/564x/87/2f/b2/872fb29d50657c88487be1e736974737.jpg" />
                  <Avatar src="https://i.pinimg.com/564x/7e/24/7c/7e247c5bf0e7996c21ba6ca93c6ea74c.jpg" />
                  <Avatar src="https://i.pinimg.com/564x/dc/f2/55/dcf2552a4150988f92f7d5ca1c2d7c7e.jpg" />
                  <Avatar src="https://i.pinimg.com/564x/87/2f/b2/872fb29d50657c88487be1e736974737.jpg" />
                  <Avatar src="https://i.pinimg.com/564x/7e/24/7c/7e247c5bf0e7996c21ba6ca93c6ea74c.jpg" />
                  <Avatar src="https://i.pinimg.com/564x/dc/f2/55/dcf2552a4150988f92f7d5ca1c2d7c7e.jpg" />
                  <Avatar src="https://i.pinimg.com/564x/87/2f/b2/872fb29d50657c88487be1e736974737.jpg" />
                  <Avatar src="https://i.pinimg.com/564x/7e/24/7c/7e247c5bf0e7996c21ba6ca93c6ea74c.jpg" />
                </AvatarGroup>
              </Stack>
            </Box>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

export default AvatarGuide;
