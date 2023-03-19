import InputGroup from "@/components/InputGroup";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import BaseInputGuide from "./BasicInput";
import InputAdormentGuide from "./InputAdorment";
import InputHelperTextGuide from "./InputHelperText";

const InputGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Input Guide</Typography>
      <Box mt={4}></Box>
      <BaseInputGuide />
      <InputAdormentGuide />
      <InputHelperTextGuide />
      <Card sx={{ mt: 4 }}>
        <Stack direction="column" gap={1} mt={4}>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <InputGroup
                label="Description"
                placeholder="Description"
                multiline
                minRows={4}
              />
            </Grid>
            <Grid item md={3}>
              <InputGroup
                label="Description"
                required
                placeholder="Description"
                multiline
                minRows={4}
              />
            </Grid>
            <Grid item md={3}>
              <InputGroup
                label="Description"
                required
                placeholder="Description"
                multiline
                minRows={4}
                helperText="This is a hint to help user"
              />
            </Grid>
            <Grid item md={3}>
              <InputGroup
                label="Description"
                required
                placeholder="Description"
                multiline
                error
                minRows={4}
                helperText="This is an error message"
              />
            </Grid>
          </Grid>
        </Stack>
      </Card>
    </Box>
  );
};

export default InputGuide;
