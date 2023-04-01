import UploadFilePond from "@/components/UploadFile/UploadFilePond"
import { Card, Grid, Typography } from "@mui/material"
import React, { useState } from "react"

const UploadFilePondGuide: React.FC = () => {
  const [files, setFiles] = useState<any[]>([])

  return (
    <Card sx={{ mb: 4 }}>
      <Typography variant="subtitle1" fontWeight={"semiBold"}>
        Upload Using FilePond
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <UploadFilePond
            files={files}
            onupdatefiles={(val) => setFiles(val)}
            allowMultiple={true}
            maxFiles={3}
            name="files"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            allowImagePreview={false}
          />
        </Grid>
        <Grid item md={6}>
          <UploadFilePond
            files={files}
            onupdatefiles={(val) => setFiles(val)}
            allowMultiple={true}
            maxFiles={3}
            name="files"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
        </Grid>
      </Grid>
    </Card>
  )
}

export default UploadFilePondGuide
