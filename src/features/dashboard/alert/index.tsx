import { Box, Card, Typography, Alert, Stack, IconButton, AlertTitle, Grid } from "@mui/material"
import React from "react"
import { XCircle } from "phosphor-react"
import AlertFilled from "./AlertFilled"
import AlertOutlined from "./AlertOutlined"

const AlertGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Alert Guide</Typography>
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <AlertFilled />
          </Grid>
          <Grid item md={6}>
            <AlertOutlined />
          </Grid>
        </Grid>
      </Box>
      <Card sx={{ mt: 4 }}>
        <Stack direction="column" spacing={1} mb={2}>
          <Typography variant="subtitle1">Alert Filled</Typography>
          <Alert variant="filled" severity="error">
            This is an error alert — check it out!
          </Alert>
          <Alert variant="filled" severity="warning">
            This is an error alert — check it out!
          </Alert>
          <Alert variant="filled" severity="info">
            This is an error alert — check it out!
          </Alert>
          <Alert variant="filled" severity="success">
            This is an error alert — check it out!
          </Alert>
        </Stack>
        <Stack direction="column" spacing={1} mb={2}>
          <Typography variant="subtitle1">Alert Outlined</Typography>
          <Alert variant="outlined" severity="error">
            This is an error alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="warning">
            This is an error alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="info">
            This is an error alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="success">
            This is an error alert — check it out!
          </Alert>
        </Stack>
        <Stack direction="column" spacing={1} mb={2}>
          <Typography variant="subtitle1">Alert Description</Typography>
          <Alert
            variant="outlined"
            severity="error"
            action={
              <IconButton color="error">
                <XCircle size={24} weight="bold" />
              </IconButton>
            }
          >
            <AlertTitle>There was a problem with that action</AlertTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
          </Alert>
          <Alert
            variant="outlined"
            severity="warning"
            action={
              <IconButton color="warning">
                <XCircle size={24} weight="bold" />
              </IconButton>
            }
          >
            <AlertTitle>Just to let you know this might be a problem</AlertTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
          </Alert>
          <Alert
            variant="outlined"
            severity="info"
            action={
              <IconButton color="info">
                <XCircle size={24} weight="bold" />
              </IconButton>
            }
          >
            <AlertTitle>We&apos;ve just released a new feature</AlertTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
          </Alert>
          <Alert
            variant="outlined"
            severity="success"
            action={
              <IconButton color="success">
                <XCircle size={24} weight="bold" />
              </IconButton>
            }
          >
            <AlertTitle>Successfully updated profile</AlertTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
          </Alert>
        </Stack>
      </Card>
    </Box>
  )
}

export default AlertGuide
