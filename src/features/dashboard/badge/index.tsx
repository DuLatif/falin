import { Box, Card, Chip, Typography, Stack, Avatar } from "@mui/material";
import React from "react";
import { X } from "phosphor-react";

const BadgeGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Badge Guide</Typography>
      <Box mt={4}>
        <Card>
          <Box mb={2}>
            <Typography>Basic Badge</Typography>
            <Stack direction="row" spacing={2}>
              <Chip label="Badge Filled" />
              <Chip label="Badge Outlined" variant="outlined" />
            </Stack>
          </Box>
          <Box mb={2}>
            <Typography>Badge Clickable</Typography>
            <Stack direction="row" spacing={2}>
              <Chip label="Badge Filled" onClick={() => alert("clicked")} />
              <Chip
                label="Badge Outlined"
                variant="outlined"
                onClick={() => alert("clicked")}
              />
            </Stack>
          </Box>
          <Box mb={2}>
            <Typography>Badge Deletedable</Typography>
            <Stack direction="row" spacing={2}>
              <Chip label="Badge Filled" onDelete={() => alert("deleted!")} />
              <Chip
                label="Badge Outlined"
                variant="outlined"
                onDelete={() => alert("deleted!")}
              />
              <Chip
                label="Badge Custom Icon"
                variant="outlined"
                onDelete={() => alert("deleted!")}
                deleteIcon={<X weight="bold" size={18} />}
              />
            </Stack>
          </Box>
          <Box mb={2}>
            <Typography>Badge Avatar</Typography>
            <Stack direction="row" spacing={2}>
              <Chip label="Avatar" avatar={<Avatar>A</Avatar>} />
              <Chip label="Avatar" avatar={<Avatar>B</Avatar>} />
              <Chip label="Avatar" avatar={<Avatar>C</Avatar>} />
            </Stack>
          </Box>
          <Box mb={2}>
            <Typography>Badge Color</Typography>
            <Stack direction="row" spacing={2}>
              <Chip label="Default" color="default" />
              <Chip label="Primary" color="primary" />
              <Chip label="Error" color="error" />
              <Chip label="Success" color="success" />
              <Chip label="Info" color="info" />
              <Chip label="Warning" color="warning" />
            </Stack>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Chip label="Default" variant="outlined" color="default" />
              <Chip label="Primary" variant="outlined" color="primary" />
              <Chip label="Error" variant="outlined" color="error" />
              <Chip label="Success" variant="outlined" color="success" />
              <Chip label="Info" variant="outlined" color="info" />
              <Chip label="Warning" variant="outlined" color="warning" />
            </Stack>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Chip
                label="Default"
                onDelete={() => alert("deleted!")}
                variant="outlined"
                color="default"
              />
              <Chip
                label="Primary"
                onDelete={() => alert("deleted!")}
                variant="outlined"
                color="primary"
              />
              <Chip
                label="Error"
                onDelete={() => alert("deleted!")}
                variant="outlined"
                color="error"
              />
              <Chip
                label="Success"
                onDelete={() => alert("deleted!")}
                variant="outlined"
                color="success"
              />
              <Chip
                label="Info"
                onDelete={() => alert("deleted!")}
                variant="outlined"
                color="info"
              />
              <Chip
                label="Warning"
                onDelete={() => alert("deleted!")}
                variant="outlined"
                color="warning"
              />
            </Stack>
          </Box>
          <Box mb={2}>
            <Typography>Badge Size</Typography>
            <Stack direction="row" spacing={2}>
              <Chip label="Badge Medium" size="medium" />
              <Chip label="Badge Medium" size="medium" variant="outlined" />
              <Chip label="Badge Small" size="small" />
              <Chip label="Badge Small" size="small" variant="outlined" />
            </Stack>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default BadgeGuide;
