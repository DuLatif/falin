import { neutral } from "@/theme/colors"
import { Box, Button, Stack, SxProps, Typography } from "@mui/material"
import { CloudArrowUp, Trash } from "phosphor-react"
import React, { useEffect } from "react"
import useLogic from "../utils/useLogic"
import { getStyles } from "../utils/getStyles"

export interface IUploadFileProps {
  disabled?: boolean
  onChange?: (file: File | null) => void
  placeholder?: string
  value?: File
}
const UploadFile: React.FC<IUploadFileProps> = React.forwardRef(
  ({ disabled = false, onChange, placeholder, value }, ref) => {
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
      reset,
    } = useLogic(onChange)

    useEffect(() => {
      if (value === undefined) reset()
    }, [value])

    const styles: {
      root: SxProps
      boxIconCloud: SxProps
      label: SxProps
      fileName: SxProps
      stackBtn: SxProps
    } = getStyles(disabled, onDropZone, file, isImage, imgSources)

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
          {placeholder && <Typography>{placeholder}</Typography>}
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
        ref={ref}
      >
        <input
          disabled={disabled}
          type="file"
          ref={fileInput}
          style={{ display: "none" }}
          onChange={handleChangeInput}
        />
        <Stack direction="column" sx={{ height: "100%" }} justifyContent={"center"} alignItems={"center"} spacing={3}>
          {!imgSources ? <BoxImageEmpty /> : <BoxImageExists />}
        </Stack>
      </Box>
    )
  }
)

UploadFile.displayName = "UploadFile"
export default UploadFile
