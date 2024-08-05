export const snackbarTransitionCode = `import React, { useState } from 'react;
import { Stack, Button, Snackbar, Alert ,Card } from "@mui/material";

const App : React.FC = () => {
  const [showGrowTransition, setShowGrowTransition] = useState(false)
  const [showFadeTransition, setShowFadeTransition] = useState(false)
  const [showSlideTransition, setShowSlideTransition] = useState(false)

  return (
    <Card>
      <Stack direction="row" spacing={2}>
        <Button onClick={() => setShowGrowTransition(true)}>Grow Transition</Button>
        <Button onClick={() => setShowFadeTransition(true)}>Fade Transition</Button>
        <Button onClick={() => setShowSlideTransition(true)}>Slide Transition</Button>
      </Stack>
      <Snackbar
        open={showGrowTransition}
        message="This is grow snackbar transition message"
        autoHideDuration={1500}
        TransitionComponent={Grow}
        onClose={() => setShowGrowTransition(false)}
      />
      <Snackbar
        open={showFadeTransition}
        message="This is fade snackbar transition message"
        autoHideDuration={1500}
        TransitionComponent={Fade}
        onClose={() => setShowFadeTransition(false)}
      />
      <Snackbar
        open={showSlideTransition}
        message="This is slide snackbar transition message"
        autoHideDuration={1500}
        TransitionComponent={Slide}
        onClose={() => setShowSlideTransition(false)}
      />
    </Card>
  )
}

export default App;
`
