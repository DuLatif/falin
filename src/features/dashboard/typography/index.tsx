import {
  Box,
  Card,
  Divider,
  Grid,
  Stack,
  SxProps,
  Typography,
  TypographyVariant,
} from "@mui/material";
import React from "react";

const listTypograpy: TypographyVariant[] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "caption",
  "overline",
];

const styles: { card: SxProps } = {
  card: {
    padding: "20px",
    boxShadow: 3,
  },
};
const TypographyList: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Typography</Typography>
      <Grid container mt={4} spacing={1}>
        <Grid item md={3}>
          <Card sx={styles.card}>
            <Typography variant="h6">Regular</Typography>
            <Divider sx={{ mt: 1, mb: 2 }} />
            <Stack direction={"column"}>
              {listTypograpy.map((variant, i) => (
                <Typography variant={variant} key={i} fontWeight="regular">
                  Text {variant}
                </Typography>
              ))}
            </Stack>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card sx={styles.card}>
            <Typography variant="h6">Medium</Typography>
            <Divider sx={{ mt: 1, mb: 2 }} />
            <Stack direction={"column"}>
              {listTypograpy.map((variant, i) => (
                <Typography variant={variant} key={i} fontWeight="medium">
                  Text {variant}
                </Typography>
              ))}
            </Stack>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card sx={styles.card}>
            <Typography variant="h6">Semi Bold</Typography>
            <Divider sx={{ mt: 1, mb: 2 }} />
            <Stack direction={"column"}>
              {listTypograpy.map((variant, i) => (
                <Typography variant={variant} key={i} fontWeight="semiBold">
                  Text {variant}
                </Typography>
              ))}
            </Stack>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card sx={styles.card}>
            <Typography variant="h6">Bold</Typography>
            <Divider sx={{ mt: 1, mb: 2 }} />
            <Stack direction={"column"}>
              {listTypograpy.map((variant, i) => (
                <Typography variant={variant} key={i} fontWeight="bold">
                  Text {variant}
                </Typography>
              ))}
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TypographyList;
