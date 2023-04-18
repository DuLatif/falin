export const alertFilled = `import React from "react";
import { Card, Alert, Typography} from "@mui/material";

const App : React.FC = () => {
  return (
    <Card component="section">
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Alert Filled
      </Typography>
      <Stack direction="column" spacing={1} mb={2}>
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
    </Card>
  )
}`
