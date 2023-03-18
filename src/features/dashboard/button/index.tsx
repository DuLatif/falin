import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Smiley } from "phosphor-react";
import React from "react";

type TSize = "sm" | "md" | "lg" | "xl" | "2xl";
const listSizes: TSize[] = ["sm", "md", "lg", "xl", "2xl"];

interface IListButtonsProps {
  title: string;
  color:
    | "primary"
    | "secondary"
    | "info"
    | "inherit"
    | "success"
    | "error"
    | "warning";
}
const ListButtons: React.FC<IListButtonsProps> = ({ title, color }) => {
  return (
    <Card>
      <Typography variant="subtitle1" mb={1}>
        {title}
      </Typography>
      <Typography variant="subtitle2" my={2}>
        Variant Contained
      </Typography>
      <Grid container>
        <Grid item md={8}>
          <Stack direction={"column"} spacing={2}>
            <Stack direction="row" flexWrap={"wrap"} spacing={1}>
              {listSizes.map((size) => (
                <Button color={color} key={size} size={size}>
                  Button {size}
                </Button>
              ))}
            </Stack>
            <Stack direction="row" flexWrap={"wrap"} spacing={1}>
              {listSizes.map((size) => (
                <Button color={color} key={size} disabled size={size}>
                  Button {size}
                </Button>
              ))}
            </Stack>

            <Stack direction="row" flexWrap={"wrap"} spacing={1}>
              {listSizes.map((size) => (
                <Button
                  color={color}
                  key={size}
                  size={size}
                  startIcon={<BtnIcon />}
                >
                  Button {size}
                </Button>
              ))}
            </Stack>
            <Stack direction="row" flexWrap={"wrap"} spacing={1}>
              {listSizes.map((size) => (
                <Button
                  color={color}
                  key={size}
                  size={size}
                  endIcon={<BtnIcon />}
                >
                  Button {size}
                </Button>
              ))}
            </Stack>
            <Stack direction="row" flexWrap={"wrap"} spacing={1}>
              {listSizes.map((size) => (
                <Button
                  color={color}
                  key={size}
                  size={size}
                  disabled
                  endIcon={<BtnIcon />}
                >
                  Button {size}
                </Button>
              ))}
            </Stack>
            <Stack direction="row" flexWrap={"wrap"} spacing={1}>
              {listSizes.map((size) => (
                <Button color={color} key={size} size={size} disabled>
                  <CircularProgress />
                </Button>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={4}>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={1}>
              {listSizes.map((size) => (
                <Button color={color} key={size} size={size} data-shape="icon">
                  <BtnIcon />
                </Button>
              ))}
            </Stack>
            <Stack direction="row" spacing={1}>
              {listSizes.map((size) => (
                <Button
                  color={color}
                  key={size}
                  size={size}
                  disabled
                  data-shape="icon"
                >
                  <BtnIcon />
                </Button>
              ))}
            </Stack>
            <Stack direction="row" spacing={1}>
              {listSizes.map((size) => (
                <Button
                  color={color}
                  key={size}
                  size={size}
                  disabled
                  data-shape="icon"
                >
                  <CircularProgress />
                </Button>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Typography variant="subtitle2" my={2}>
        Variant Text
      </Typography>
      <Grid container>
        <Grid item md={8}>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" flexWrap="wrap" spacing={1}>
              {listSizes.map((size) => (
                <Button color={color} key={size} variant="text" size={size}>
                  Button {size}
                </Button>
              ))}
            </Stack>
            <Stack direction="row" flexWrap="wrap" spacing={1}>
              {listSizes.map((size) => (
                <Button
                  color={color}
                  key={size}
                  disabled
                  variant="text"
                  size={size}
                >
                  Button {size}
                </Button>
              ))}
            </Stack>
            <Stack direction="row" flexWrap={"wrap"} spacing={1}>
              {listSizes.map((size) => (
                <Button
                  color={color}
                  key={size}
                  variant="text"
                  size={size}
                  disabled
                >
                  <CircularProgress />
                </Button>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={4}>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={1}>
              {listSizes.map((size) => (
                <Button
                  color={color}
                  key={size}
                  variant="text"
                  size={size}
                  data-shape="icon"
                >
                  <BtnIcon />
                </Button>
              ))}
            </Stack>
            <Stack direction="row" spacing={1}>
              {listSizes.map((size) => (
                <Button
                  color={color}
                  key={size}
                  variant="text"
                  size={size}
                  disabled
                  data-shape="icon"
                >
                  <BtnIcon />
                </Button>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

const BtnIcon = () => <Smiley size={22} weight={"bold"} />;
const ButtonGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Button</Typography>
      <Stack direction={"column"} mt={4} spacing={3}>
        <ListButtons title="Button Primary" color="primary" />
        <ListButtons title="Button Info" color="info" />
        <ListButtons title="Button Success" color="success" />
        <ListButtons title="Button Warning" color="warning" />
        <ListButtons title="Button Error" color="error" />
        <ListButtons title="Button Neutral" color="inherit" />
      </Stack>
    </Box>
  );
};

export default ButtonGuide;
