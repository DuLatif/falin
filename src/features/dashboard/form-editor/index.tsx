import { Box, Card, Typography } from "@mui/material"
import React from "react"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

const FormEditorGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Form Editor Guide</Typography>
      <Box mt={4}>
        <Card>
          <Typography variant="subtitle1" mb={1} fontWeight={"semiBold"}>
            CkEditor
          </Typography>
          <Typography mb={1}>
            This component using library{" "}
            <a
              href="https://ckeditor.com/docs/ckeditor5/latest/installation/frameworks/react.html"
              className="link"
              target="_blank" rel="noreferrer"
            >
              CK Editor
            </a>
          </Typography>
          <CKEditor editor={ClassicEditor} data="<p>Hello from CKEditor 5!</p>" />
        </Card>
      </Box>
    </Box>
  )
}

export default FormEditorGuide
