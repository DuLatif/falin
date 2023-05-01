import CodeSnippet from "@/components/CodeSnippet/CodeSnippet"
import { Modal } from "@/components/Modal"
import { Box, Button, Card, Stack, Typography } from "@mui/material"
import { CheckCircle, Trash, UploadSimple } from "phosphor-react"
import React, { useState } from "react"
import { modalIconContainedCode, modalIconWithoutTitleCode } from "./_code/modal"

const ModalIconGuide: React.FC = () => {
  const [showModalDefault, setShowModalDefault] = useState(false)
  const [showModalOutlinedIcon, setShowModalOutlinedIcon] = useState(false)
  const [showModalSimple, setShowModalSimple] = useState(false)

  return (
    <>
      <Card component="section">
        <Box mb={2}>
          <Typography variant="subtitle1" fontWeight={"semiBold"}>
            Modal Icon
          </Typography>
          <Typography mb={1.5} color="text.secondary">
            If you want to add the icon on the header, you can pass the <code>icon</code> as props on the{" "}
            <code>{"<Modal.Header />"}</code>. The icon comes with two variants: <code>contained</code> and{" "}
            <code>outlined</code>.
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button onClick={() => setShowModalDefault(true)}>Contained Icon Modal</Button>
            <Button onClick={() => setShowModalOutlinedIcon(true)}>Outlined Icon Modal</Button>
          </Stack>
          <CodeSnippet code={modalIconContainedCode} />
        </Box>
        <Box>
          <Typography variant="subtitle2" fontWeight={"semiBold"}>
            Without Title
          </Typography>
          <Typography mb={1.5} color="text.secondary">
            You can create the modal icon without the title and subtitle because both of them are not required as props
            for <code>{"<Modal.Header />"}</code> component.
          </Typography>
          <Button onClick={() => setShowModalSimple(true)}>Open Modal</Button>
          <CodeSnippet code={modalIconWithoutTitleCode} />
        </Box>
      </Card>

      <Modal
        open={showModalDefault}
        onClose={() => setShowModalDefault(false)}
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
        <Modal.Footer>
          <Button color="inherit" variant="outlined" onClick={() => setShowModalDefault(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        open={showModalOutlinedIcon}
        onClose={() => setShowModalOutlinedIcon(false)}
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
        <Modal.Footer divider onCancel={() => setShowModalOutlinedIcon(false)}>
          <Button>Submit</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        containerProps={{ sx: { maxWidth: "540px !important" } }}
        open={showModalSimple}
        onClose={() => setShowModalSimple(false)}
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
        <Modal.Footer onCancel={() => setShowModalSimple(false)}>
          <Button color="error">Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalIconGuide
