export const snackbarPositionCode = `import React, { useState } from 'react;
import { Stack, Button, Snackbar, Alert ,Card } from "@mui/material";

type TVertical = "top" | "bottom"
type THorizontal = "left" | "right" | "center"
interface ISnackbarState {
  open: boolean
  vertical: TVertical
  horizontal: THorizontal
}
const App : React.FC = () => {
  const [showSnackbar, setShowSnackbar] = useState<ISnackbarState>({
    open: false,
    vertical: "top",
    horizontal: "center",
  })

  const openSnackbar = (vertical: TVertical, horizontal: THorizontal) => {
    setShowSnackbar({ open: true, vertical: vertical, horizontal: horizontal })
  }

  const closeSnackbar = () => {
    setShowSnackbar({ ...showSnackbar, open: false })
  }

  return (
    <Card>
      <Stack direction="row" gap={2} flexWrap={"wrap"}>
        <Button onClick={() => openSnackbar("top", "left")}>Top-Left</Button>
        <Button onClick={() => openSnackbar("top", "center")}>Top-Center</Button>
        <Button onClick={() => openSnackbar("top", "right")}>Top-Right</Button>
      </Stack>
      <Stack direction="row" gap={2} mt={2}>
        <Button onClick={() => openSnackbar("bottom", "left")}>Bottom-Left</Button>
        <Button onClick={() => openSnackbar("bottom", "center")}>Bottom-Center</Button>
        <Button onClick={() => openSnackbar("bottom", "right")}>Bottom-Right</Button>
      </Stack>

      <Snackbar
        open={showSnackbar.open}
        message="This is a snackbar message"
        autoHideDuration={3000}
        anchorOrigin={{ vertical: showSnackbar.vertical, horizontal: showSnackbar.horizontal }}
        onClose={closeSnackbar}
      />
    </Card>
  )
}

export default App;
`
