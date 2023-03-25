const baseContainer = (code: string) => {
  return `import React from "react";
import { Box, Card, Typography } from "@mui/material";
import Checkbox from "@/components/Checkbox";


const App : React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <Box>
      ${code}
    </Box>
  )
}`;
};

export const checkboxCode =
  baseContainer(`<Typography variant="subtitle1">Checkboxes</Typography>
        <Checkbox label="Remember Me" />
        <Checkbox label="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti itaque voluptatem reiciendis unde quam quae ratione, natus magnam officia amet eum porro et est, a, veritatis provident vel cumque ex. " />
        <Checkbox
          align="center"
          label="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti itaque voluptatem reiciendis unde quam quae ratione, natus magnam officia amet eum porro et est, a, veritatis provident vel cumque ex.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti itaque voluptatem reiciendis unde quam quae ratione, natus magnam officia amet eum porro et est, a, veritatis provident vel cumque ex. "
        />`);
