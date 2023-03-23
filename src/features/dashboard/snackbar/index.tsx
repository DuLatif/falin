import {
  Alert,
  Box,
  Button,
  Card,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const SnackbarGuide: React.FC = () => {
  const [simpleSnackbar, setSimpleSnackbar] = useState(false);
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);

  return (
    <Box>
      <Typography variant="h6">Snackbar Guide</Typography>
      <Box mt={4}>
        <Card>
          <Stack direction="column" spacing={3}>
            <Box>
              <Typography variant="subtitle1">Simple Snackbar</Typography>
              <Button variant="text" onClick={() => setSimpleSnackbar(true)}>
                Open Simple Snackbar
              </Button>
              <Snackbar
                open={simpleSnackbar}
                autoHideDuration={5000}
                onClose={() => setSimpleSnackbar(false)}
                message="This is snackbar message"
              />
            </Box>
            <Box>
              <Typography variant="subtitle1">Customization</Typography>
              <Stack direction="row" spacing={1}>
                <Button
                  variant="text"
                  color="error"
                  onClick={() => setErrorSnackbar(true)}
                >
                  Open Error Snackbar
                </Button>
                <Button
                  variant="text"
                  color="success"
                  onClick={() => setSuccessSnackbar(true)}
                >
                  Open Success Snackbar
                </Button>
              </Stack>
              <Snackbar
                open={successSnackbar}
                onClose={() => setSuccessSnackbar(false)}
              >
                <Alert
                  severity="success"
                  onClose={() => setSuccessSnackbar(false)}
                >
                  This is a success message!
                </Alert>
              </Snackbar>
              <Snackbar
                open={errorSnackbar}
                onClose={() => setErrorSnackbar(false)}
              >
                <Alert severity="error" onClose={() => setErrorSnackbar(false)}>
                  This is a error message!
                </Alert>
              </Snackbar>
            </Box>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

export default SnackbarGuide;
