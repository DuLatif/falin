import { Box, Card, Typography } from "@mui/material"
import React from "react"
import { checkboxCode } from "./_code/checkbox-code"
import CodeSnippet from "@/ui/components/CodeSnippet"
import Checkbox from "@/ui/elements/Checkbox"

const CheckboxGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Checkbox Guide</Typography>
      <Card sx={{ mt: 4 }}>
        <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
          Checkboxes
        </Typography>
        <Checkbox label="Remember Me" />
        <Checkbox label="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti itaque voluptatem reiciendis unde quam quae ratione, natus magnam officia amet eum porro et est, a, veritatis provident vel cumque ex. " />
        <Checkbox
          align="center"
          label="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti itaque voluptatem reiciendis unde quam quae ratione, natus magnam officia amet eum porro et est, a, veritatis provident vel cumque ex.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti itaque voluptatem reiciendis unde quam quae ratione, natus magnam officia amet eum porro et est, a, veritatis provident vel cumque ex. "
        />
        <CodeSnippet code={checkboxCode} />
      </Card>
    </Box>
  )
}

export default CheckboxGuide
