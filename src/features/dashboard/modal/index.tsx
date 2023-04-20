import CodeSnippet from "@/components/CodeSnippet"
import { Box, Button, Card, Stack, Typography } from "@mui/material"
import { CheckCircle, Trash, UploadSimple } from "phosphor-react"
import React, { useState } from "react"
import { modalCode } from "./_code/modal"
import ModalErrorGuide from "./ModalErrorGuide"
import { Modal } from "@/components/Modal"

const ModalGuide: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [showModalHeader, setShowModalHeader] = useState(false)
  const [showModalInfo, setShowModalInfo] = useState(false)
  const [showModalSubmit, setShowModalSubmit] = useState(false)

  return (
    <Box>
      <Typography variant="h6">Modal Guide</Typography>
      <Box mt={4}>
        <Card>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => setShowModal(true)} color={"error"}>
              Open Modal Delete
            </Button>

            <Button onClick={() => setShowModalHeader(true)} color={"success"}>
              Open Modal Header
            </Button>
            <Button onClick={() => setShowModalInfo(true)} color={"info"}>
              Open Modal Info
            </Button>
            <Button onClick={() => setShowModalSubmit(true)}>Open Modal Submit</Button>
            <ModalErrorGuide />
          </Stack>
          <CodeSnippet code={modalCode} />
        </Card>
      </Box>

      <Modal
        containerProps={{ sx: { maxWidth: "540px !important" } }}
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <Modal.Header icon={{ icon: <Trash weight="bold" />, color: "error", variant: "contained" }} />
        <Modal.Body>
          <Typography variant="subtitle2" fontWeight={"semiBold"}>
            Delete blog post
          </Typography>
          <Typography variant="body2">
            Are you sure you want to delete this post? This action cannot be undone.
          </Typography>
        </Modal.Body>
        <Modal.Footer onCancel={() => setShowModal(false)}>
          <Button color="error">Delete</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        open={showModalHeader}
        onClose={() => setShowModalHeader(false)}
        containerProps={{ sx: { maxWidth: "540px !important" } }}
      >
        <Modal.Header
          title="Success"
          subtitle="Success deleted data"
          icon={{ icon: <CheckCircle weight="bold" />, color: "success", variant: "contained" }}
        />
        <Modal.Body>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit beatae cupiditate aliquam suscipit
            temporibus, ad modi aperiam, aut ducimus, vel quod? Adipisci aliquam beatae ducimus soluta alias incidunt
            enim.
          </Typography>
        </Modal.Body>
        <Modal.Footer onCancel={() => setShowModalHeader(false)}></Modal.Footer>
      </Modal>
      <Modal
        open={showModalInfo}
        onClose={() => setShowModalInfo(false)}
        containerProps={{ sx: { maxWidth: "540px !important" } }}
      >
        <Modal.Header title="Title" subtitle="Lorem ipsum dolor sit amet" divider />
        <Modal.Body>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit beatae cupiditate aliquam suscipit
            temporibus, ad modi aperiam, aut ducimus, vel quod? Adipisci aliquam beatae ducimus soluta alias incidunt
            enim.
          </Typography>
        </Modal.Body>
        <Modal.Footer divider>
          <Button color="info" variant="text" onClick={() => setShowModalInfo(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        open={showModalSubmit}
        onClose={() => setShowModalSubmit(false)}
        containerProps={{ sx: { maxWidth: "540px !important" } }}
      >
        <Modal.Header
          title="Title"
          subtitle="Lorem ipsum dolor sit amet"
          divider
          icon={{
            icon: <UploadSimple weight="bold" />,
            variant: "outlined",
            color: "neutral",
          }}
        />
        <Modal.Body>
          <Typography variant="subtitle2">Lorem ipsum</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit beatae cupiditate aliquam suscipit
            temporibus, ad modi aperiam, aut ducimus, vel quod? Adipisci aliquam beatae ducimus soluta alias incidunt
            enim.
          </Typography>
        </Modal.Body>
        <Modal.Footer divider onCancel={() => setShowModalSubmit(false)}>
          <Button>Submit</Button>
        </Modal.Footer>
      </Modal>
    </Box>
  )
}

export default ModalGuide
