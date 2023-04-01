import { info, neutral, primary } from "@/theme/colors"
import { Box, Button, Stack, SxProps, Typography } from "@mui/material"
import { CloudArrowUp, Trash } from "phosphor-react"
import React from "react"
import useLogic from "./useLogic"

export interface IUploadFileProps {
  disabled?: boolean
  onChange?: (file: File | null) => void
}
const UploadFile: React.FC<IUploadFileProps> = ({ disabled = false, onChange }) => {
  const {
    fileInput,
    imgSources,
    isImage,
    file,
    onDropZone,
    setOnDropZone,
    handleDrop,
    handleDrag,
    handleChangeInput,
    handleUpload,
    removeFile,
  } = useLogic(onChange)

  const styles: {
    root: SxProps
    boxIconCloud: SxProps
    label: SxProps
    fileName: SxProps
    stackBtn: SxProps
  } = {
    root: {
      border: `1px solid ${neutral[300]}`,
      height: "185px",
      borderRadius: "8px",
      overflow: "hidden",
      backgroundColor: disabled ? neutral[100] : onDropZone ? primary[100] : file && !isImage ? "#f3f3f3" : "#fff",
      backgroundImage: `url(${imgSources})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    },
    boxIconCloud: {
      color: neutral[500],
      backgroundColor: neutral[100],
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "4px",
      boxSizing: "border-box",
      margin: "auto",
      marginBottom: "8px",
    },
    label: {
      fontWeight: 500,
      color: info[500],
      cursor: "pointer",
      "&:hover": { color: info[700] },
    },
    fileName: { position: "absolute", top: "10px", left: "10px" },
    stackBtn: {
      transform: isImage ? "translateY(0px)" : "translateY(-10px)",
    },
  }

  const BoxImageEmpty = () => (
    <>
      <Box sx={{ textAlign: "center", color: neutral[700] }}>
        <Box sx={styles.boxIconCloud}>
          <CloudArrowUp weight="bold" size={20} />
        </Box>
        <Typography variant="body1">
          <Typography component="span" sx={styles.label} onClick={handleUpload}>
            Click to upload
          </Typography>{" "}
          or drag and drop
        </Typography>
      </Box>
    </>
  )

  const BoxImageExists = () => (
    <>
      {!isImage && (
        <Typography variant="body1" sx={styles.fileName}>
          {file?.name}
        </Typography>
      )}
      <Stack direction={"row"} spacing={2} sx={styles.stackBtn}>
        <Button variant="contained" onClick={handleUpload}>
          Change File
        </Button>
        <Button data-shape="icon" color="error" onClick={removeFile}>
          <Trash weight="bold" size={26} />
        </Button>
      </Stack>
    </>
  )

  return (
    <Box
      sx={styles.root}
      onDrop={handleDrop}
      onDragOver={handleDrag}
      onDragEnter={() => setOnDropZone(true)}
      onDragLeave={() => setOnDropZone(false)}
    >
      <input disabled={disabled} type="file" ref={fileInput} style={{ display: "none" }} onChange={handleChangeInput} />
      <Stack direction="column" sx={{ height: "100%" }} justifyContent={"center"} alignItems={"center"} spacing={3}>
        {!imgSources ? <BoxImageEmpty /> : <BoxImageExists />}
      </Stack>
    </Box>
  )
}

export default UploadFile
