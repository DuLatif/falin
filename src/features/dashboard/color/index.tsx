import {
  danger,
  info,
  neutral,
  primary,
  success,
  warning,
} from "@/theme/colors";
import { Box, Card, Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

const levelColor = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const listColor = [
  {
    color: neutral,
    label: "Neutral",
  },
  {
    color: primary,
    label: "Primary",
  },
  {
    color: success,
    label: "Success",
  },
  {
    color: info,
    label: "Info",
  },
  {
    color: warning,
    label: "Warning",
  },
  {
    color: danger,
    label: "Danger",
  },
];

const Color: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h6">Color</Typography>
      <Card sx={{ mt: 4 }}>
        <Stack direction="column" gap={3}>
          {listColor.map((color, i) => (
            <Grid key={i} container gap={1}>
              <Grid md={12}>
                <Typography>{color.label}</Typography>
              </Grid>
              {levelColor.map((level) => (
                <Grid key={level} md={1}>
                  <Box
                    sx={{
                      // @ts-ignore
                      backgroundColor: color.color[level],
                      // @ts-ignore
                      color: theme.palette.getContrastText(color.color[level]),
                      borderRadius: "8px",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="body2" fontWeight={"semiBold"}>
                      {level}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          ))}
        </Stack>
      </Card>
    </Box>
  );
};

export default Color;
