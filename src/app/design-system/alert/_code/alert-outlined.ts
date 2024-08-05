export const alertOutlined = `import React from "react";
import { Card, Alert, Typography} from "@mui/material";

const App : React.FC = () => {
  return (
    <Card component="section">
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Alert Outlined
      </Typography>
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
    </Card>
  )
}`
