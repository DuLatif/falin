import { IModalErrorProps, ModalError } from "@/components/Modal"
import { Button } from "@mui/material"
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
      <Button onClick={testFetchData} color={"error"}>
        Open Modal Error
      </Button>

      <ModalError {...showModalError} />
    </>
  )
}

export default ModalErrorGuide
