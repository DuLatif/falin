const baseContainer = (code: string) => {
  return `import React from "react";
import {
  Box,
  Button,
  Card,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";

const App : React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <Box>
      ${code}
    </Box>
  )
}`
}

export const modalCode = baseContainer(`<Box mt={4}>
        <Card>
          <Button onClick={() => setShowModal(true)}>Open Modal</Button>
        </Card>
      </Box>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box>
          <IconButton className="btn-close" onClick={() => setShowModal(false)}>
            <X weight="bold" size="24" />
          </IconButton>
          <Typography>Modal Box</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            sed, autem incidunt tempora iure amet odit quia? Nobis incidunt aut
            accusantium magni. Error, neque necessitatibus modi beatae porro
            explicabo? Sunt?
          </Typography>
        </Box>
      </Modal>`)
