import { combineClasses } from "@/utils/styles"
import { Box, Button, Typography } from "@mui/material"
import { Bug, CopySimple } from "phosphor-react"
import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import classes from "./ModalError.module.scss"
import { AxiosError } from "axios"
import { syntaxHighlight } from "./syntaxHighlight"

export interface IModalErrorProps {
  open: boolean
  onClose: () => void
  error: Error | AxiosError | null
}
const ModalError: React.FC<IModalErrorProps> = ({ open, onClose, error }) => {
  const [subtitle, setSubtitle] = useState("")
  const [message, setMessage] = useState("Error")
  const [payload, setPayload] = useState<string>("{}")

  useEffect(() => {
    if (error instanceof AxiosError) {
      setMessage(error.response?.data?.message ?? error?.message)
      const requestPayload = error.config?.data
      setPayload(requestPayload)

      setSubtitle(`${error?.config?.method?.toUpperCase()} : ${error?.config?.url}`)
    } else {
      setMessage(error?.message || "")
    }
  }, [error])

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(JSON.parse(payload), null, 2))
  }

  return (
    <Modal containerProps={{ sx: { maxWidth: "600px !important" } }} open={open} onClose={onClose}>
      <Modal.Header
        icon={{ icon: <Bug weight="bold" />, color: "error", variant: "contained" }}
        title={error?.name ?? "Error"}
        subtitle={subtitle}
      />
      <Modal.Body sx={{ maxHeight: "540px", overflow: "auto", margin: "20px auto" }}>
        <Typography variant="subtitle2" fontWeight={"semiBold"}>
          {message}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {error?.stack}
        </Typography>
        <Box sx={{ position: "relative" }}>
          <Button
            data-shape="icon"
            variant="text"
            color="inherit"
            onClick={handleCopy}
            className={combineClasses([classes.Body, classes.Payload_Copy])}
          >
            <CopySimple weight="bold" size={24} />
          </Button>
          <pre
            className={combineClasses([classes.Body, classes.Payload])}
            dangerouslySetInnerHTML={{ __html: syntaxHighlight(JSON.stringify(JSON.parse(payload), null, 4)) }}
          ></pre>
        </Box>
      </Modal.Body>
      <Modal.Footer>
        <Button color="error" variant="text" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalError
