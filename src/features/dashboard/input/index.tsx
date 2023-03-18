import InputGroup from "@/components/InputGroup";
import {
  Box,
  Card,
  Grid,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { CurrencyDollar, EnvelopeSimple, Question } from "phosphor-react";
import React from "react";

const InputGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Input Guide</Typography>
      <Card sx={{ mt: 4 }}>
        <Stack direction="column" gap={1}>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <InputGroup label="Name" placeholder="Full Name" />
            </Grid>
            <Grid item md={3}>
              <InputGroup
                label="Email"
                placeholder="email@address.com"
                startAdornment={
                  <InputAdornment position="start">
                    <EnvelopeSimple size={22} />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item md={3}>
              <InputGroup
                label="Address"
                placeholder="Your address"
                endAdornment={
                  <InputAdornment position="end">
                    <Question size={22} />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item md={3}>
              <InputGroup
                label="Sale amount"
                type="number"
                placeholder="1.000"
                startAdornment={
                  <InputAdornment position="start">
                    <CurrencyDollar size={22} />
                  </InputAdornment>
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <InputGroup
                required
                helperText="This is a hint text to help user"
                label="Name"
                placeholder="Full Name"
              />
            </Grid>
            <Grid item md={3}>
              <InputGroup
                required
                helperText="This is a hint text to help user"
                label="Email"
                placeholder="email@address.com"
                startAdornment={
                  <InputAdornment position="start">
                    <EnvelopeSimple size={22} />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item md={3}>
              <InputGroup
                required
                helperText="This is a hint text to help user"
                label="Address"
                placeholder="Your address"
                endAdornment={
                  <InputAdornment position="end">
                    <Question size={22} />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item md={3}>
              <InputGroup
                required
                helperText="This is a hint text to help user"
                label="Sale amount"
                type="number"
                placeholder="1.000"
                startAdornment={
                  <InputAdornment position="start">
                    <CurrencyDollar size={22} />
                  </InputAdornment>
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <InputGroup
                disabled
                required
                helperText="This is a hint text to help user"
                label="Name"
                placeholder="Full Name"
              />
            </Grid>
            <Grid item md={3}>
              <InputGroup
                disabled
                required
                helperText="This is a hint text to help user"
                label="Email"
                placeholder="email@address.com"
                startAdornment={
                  <InputAdornment position="start">
                    <EnvelopeSimple size={22} />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item md={3}>
              <InputGroup
                disabled
                required
                helperText="This is a hint text to help user"
                label="Address"
                placeholder="Your address"
                endAdornment={
                  <InputAdornment position="end">
                    <Question size={22} />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item md={3}>
              <InputGroup
                disabled
                required
                helperText="This is a hint text to help user"
                label="Sale amount"
                type="number"
                placeholder="1.000"
                startAdornment={
                  <InputAdornment position="start">
                    <CurrencyDollar size={22} />
                  </InputAdornment>
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <InputGroup
                error
                required
                helperText="This is a hint text to help user"
                label="Name"
                placeholder="Full Name"
              />
            </Grid>
            <Grid item md={3}>
              <InputGroup
                error
                required
                helperText="This is a hint text to help user"
                label="Email"
                placeholder="email@address.com"
                startAdornment={
                  <InputAdornment position="start">
                    <EnvelopeSimple size={22} />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item md={3}>
              <InputGroup
                error
                required
                helperText="This is a hint text to help user"
                label="Address"
                placeholder="Your address"
                endAdornment={
                  <InputAdornment position="end">
                    <Question size={22} />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item md={3}>
              <InputGroup
                error
                required
                helperText="This is a hint text to help user"
                label="Sale amount"
                type="number"
                placeholder="1.000"
                startAdornment={
                  <InputAdornment position="start">
                    <CurrencyDollar size={22} />
                  </InputAdornment>
                }
              />
            </Grid>
          </Grid>
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
