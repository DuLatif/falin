import { Box, Card, RadioGroup, Typography } from "@mui/material";
import React from "react";
import Radio from "@/components/Radio";

const RadioGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Radio Guide</Typography>
      <Card sx={{ mt: 4 }}>
        <Typography variant="subtitle1">Radios</Typography>
        <RadioGroup row>
          <Radio label="Option 1" value="option 1" />
          <Radio label="Option 2" value="option 2" />
          <Radio label="Option 3" value="option 3" />
        </RadioGroup>
        <Radio label="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti itaque voluptatem reiciendis unde quam quae ratione, natus magnam officia amet eum porro et est, a, veritatis provident vel cumque ex. " />
        <Radio
          align="center"
          label="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti itaque voluptatem reiciendis unde quam quae ratione, natus magnam officia amet eum porro et est, a, veritatis provident vel cumque ex.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti itaque voluptatem reiciendis unde quam quae ratione, natus magnam officia amet eum porro et est, a, veritatis provident vel cumque ex. "
        />
      </Card>
    </Box>
  );
};

export default RadioGuide;
