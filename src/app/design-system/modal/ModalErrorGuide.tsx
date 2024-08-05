import { Button, Card, Typography } from "@mui/material"
import axios, { AxiosError } from "axios"
import React, { useState } from "react"
import { modalErrorCode } from "./_code/modal"
import { IModalErrorProps, ModalError } from "@/ui/sections/Modal"
import CodeSnippet from "@/ui/components/CodeSnippet"

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
        <Typography mb={2} color="text.secondary">
          Use this modal to showing the error message. Just throw the error as props, and then the error message will be
          showed.
        </Typography>
        <Button onClick={testFetchData} color={"error"}>
          Open Modal Error
        </Button>
        <CodeSnippet code={modalErrorCode} />
      </Card>

      <ModalError {...showModalError} />
    </>
  )
}

export default ModalErrorGuide
