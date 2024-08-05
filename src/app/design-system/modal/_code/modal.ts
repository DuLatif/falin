const baseContainer = (code: string) => {
  return `import React from "react";
import {
  Button,
  Card,
  Modal,
  Typography,
} from "@mui/material";

const App : React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div>
      <Card>
        <Button onClick={() => setShowModal(true)}>Open Modal</Button>
      </Card>

      ${code}
    </div>
  )
}`
}

export const modalBasicCode = baseContainer(`<Modal
          open={showModal}
          onClose={() => setShowModal(false)}
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
            <Button color="inherit" variant="outlined" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>`)

export const modalDividerCode = baseContainer(`<Modal
        open={showModal}
        onClose={() => setShowModal(false)}
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
          <Button color="inherit" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>`)

export const modalIconContainedCode = baseContainer(`<Modal
        open={showModal}
        onClose={() => setShowModal(false)}
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
          <Button color="inherit" variant="outlined" onClick={() => setShowModal(false)}>
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
      </Modal>`)

export const modalIconWithoutTitleCode = baseContainer(`<Modal
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
      </Modal>`)

export const modalErrorCode = `import { IModalErrorProps, ModalError } from "@/components/Modal"
import { Button, Card, Typography } from "@mui/material"
import axios, { AxiosError } from "axios"
import React, { useState } from "react"

const examplePayload = {
  step: 4,
  paymentMethod: "Credit Card",
  chequeNumber: "",
  bankName: "",
  isSubscribe: true,
  isPrivacy: true,
  remarks: "test remarks",
  category: "Individual",
  unitNumber: "#32-123",
  address: "MOULMEIN VIEW 69 MOULMEIN ROAD",
  postalCode: "300069",
  isTaxDeduction: true,
  taxRecipientFullName: "Minjeong",
  taxRecipientId: "S9045840Z",
  idType: "nric",
  orgName: "",
  email: "minjeong@mail.com",
  fullName: "Minjeong",
  isAnnualReport: false,
  amount: "10",
  frequencyCategory: "Once",
  frequency: "One-Time",
  lastStep: 4,
  otherAmount: null,
}
const ModalErrorGuide: React.FC = () => {
  const [showModalError, setShowModalError] = useState<IModalErrorProps>({
    open: false,
    onClose: () => setShowModalError((prev) => ({ ...prev, open: false })),
    error: null,
  })

  const testFetchData = async () => {
    try {
      await axios.post("http://localhost:8080/test", examplePayload)
    } catch (error) {
      if (error instanceof AxiosError) {
        setShowModalError((prev) => ({ ...prev, open: true, error: error as AxiosError }))
      }
    }
  }

  return (
    <>
      <Card component="section">
        <Typography variant="subtitle1" fontWeight={"semiBold"}>
          Modal Error
        </Typography>
        <Typography mb={1.5} color="text.secondary">
          Use this modal to showing the error message. Just throw the error as props, and then the error message will be
          showed.
        </Typography>
        <Button onClick={testFetchData} color={"error"}>
          Open Modal Error
        </Button>
      </Card>

      <ModalError {...showModalError} />
    </>
  )
}

export default ModalErrorGuide
`
