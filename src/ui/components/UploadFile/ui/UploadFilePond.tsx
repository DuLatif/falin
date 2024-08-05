import React from "react"
import { FilePondProps } from "react-filepond"
import styles from "../styles/FilePond.module.scss"

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond"

// Import FilePond styles
import "filepond/dist/filepond.min.css"

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation"
import FilePondPluginImagePreview from "filepond-plugin-image-preview"
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"
import { Box } from "@mui/material"

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const UploadFilePond: React.FC<FilePondProps> = React.forwardRef(({ ...props }, ref) => {
  return (
    <Box className={styles.Container} ref={ref}>
      <FilePond className={styles.FilePond} {...props} />
    </Box>
  )
})

UploadFilePond.displayName = "UploadFilePond"
export default UploadFilePond
