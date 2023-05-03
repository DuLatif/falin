export const snackbarVariantCode = `import React, { useState } from "react";
import { Stack, Button, Snackbar, Alert ,Card } from "@mui/material";

const App : React.FC = () => {
  const [showSimpleSnackbar, setShowSimpleSnackbar] = useState(false)
  const [showStandardSnackbar, setShowStandardSnackbar] = useState(false)
  const [showOutlinedSnackbar, setShowOutlinedSnackbar] = useState(false)

  return (
    <Card>
      <Stack direction="row" spacing={2}>
        <Button onClick={() => setShowSimpleSnackbar(true)}>Simple Snackbar</Button>
        <Button onClick={() => setShowStandardSnackbar(true)}>Standard Snackbar</Button>
        <Button onClick={() => setShowOutlinedSnackbar(true)}>Outlined Snackbar</Button>
      </Stack>
      <Snackbar
        open={showSimpleSnackbar}
        message="This is simple snackbar message"
        autoHideDuration={3000}
        onClose={() => setShowSimpleSnackbar(false)}
      />
      <Snackbar open={showStandardSnackbar} autoHideDuration={3000} onClose={() => setShowStandardSnackbar(false)}>
        <Alert severity="success" variant="standard" onClose={() => setShowStandardSnackbar(false)}>
          This is standard snackbar message
        </Alert>
      </Snackbar>
      <Snackbar open={showOutlinedSnackbar} autoHideDuration={3000} onClose={() => setShowOutlinedSnackbar(false)}>
        <Alert severity="success" variant="outlined" onClose={() => setShowOutlinedSnackbar(false)}>
          This is outlined snackbar message
        </Alert>
      </Snackbar>
    </Card>
  )
}

export default App;
`
