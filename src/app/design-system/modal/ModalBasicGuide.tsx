import { Box, Button, Card, Typography } from "@mui/material"
import React, { useState } from "react"
import { modalBasicCode, modalDividerCode } from "./_code/modal"
import CodeSnippet from "@/ui/components/CodeSnippet"
import { Modal } from "@/ui/layouts/Modal"

const ModalBasicGuide: React.FC = () => {
  const [showModalBasic, setShowModalBasic] = useState(false)
  const [showModalDivider, setShowModalDivider] = useState(false)

  return (
    <>
      <Card component="section" sx={{ height: 1 }}>
        <Box mb={5}>
          <Typography variant="subtitle1" fontWeight={"semiBold"}>
            Basic Modal
          </Typography>
          <Typography mb={2} color="text.secondary">
            This modal is the very basic modal that you can use.
          </Typography>
          <Button onClick={() => setShowModalBasic(true)}>Open Modal</Button>
          <CodeSnippet code={modalBasicCode} />
        </Box>
        <Box>
          <Typography variant="subtitle2" fontWeight={"semiBold"}>
            With Divider
          </Typography>
          <Typography mb={2} color="text.secondary">
            You can add divider by passing the <code>divider</code> as props on the <code>{"<Modal.Header />"}</code>{" "}
            and <code>{"<Modal.Footer />"}</code> component
          </Typography>
          <Button onClick={() => setShowModalDivider(true)}>Open Modal</Button>
          <CodeSnippet code={modalDividerCode} />
        </Box>
      </Card>

      <Modal
        open={showModalBasic}
        onClose={() => setShowModalBasic(false)}
        containerProps={{ sx: { maxWidth: "540px !important" } }}
      >
        <Modal.Header title="Title" subtitle="Modal subtitle" />
        <Modal.Body>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit beatae cupiditate aliquam suscipit
            temporibus, ad modi aperiam, aut ducimus, vel quod? Adipisci aliquam beatae ducimus soluta alias incidunt
            enim.
          </Typography>
        </Modal.Body>
        <Modal.Footer>
          <Button color="inherit" variant="outlined" onClick={() => setShowModalBasic(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        open={showModalDivider}
        onClose={() => setShowModalDivider(false)}
        containerProps={{ sx: { maxWidth: "540px !important" } }}
      >
        <Modal.Header title="Title" subtitle="Modal subtitle" divider />
        <Modal.Body>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit beatae cupiditate aliquam suscipit
            temporibus, ad modi aperiam, aut ducimus, vel quod? Adipisci aliquam beatae ducimus soluta alias incidunt
            enim.
          </Typography>
        </Modal.Body>
        <Modal.Footer divider>
          <Button color="inherit" onClick={() => setShowModalDivider(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalBasicGuide
