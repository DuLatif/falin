import SelectGroup from "@/components/SelectGroup";
import {
  Box,
  Card,
  FormControl,
  FormHelperText,
  Grid,
  FormLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

const SelectGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Select Guide</Typography>
      <Box mt={4}>
        <Card>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <FormControl>
                <FormLabel htmlFor="religion">Religion</FormLabel>
                <Select defaultValue={" "} id="religion">
                  <MenuItem value=" ">-- Religion ---</MenuItem>
                  <MenuItem value="Islam">Islam</MenuItem>
                  <MenuItem value="Kristen">Kristen</MenuItem>
                  <MenuItem value="Katholik">Katholik</MenuItem>
                  <MenuItem value="Budha">Budha</MenuItem>
                  <MenuItem value="Hindu">Hindu</MenuItem>
                </Select>
                <FormHelperText>This is an error message</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={4}>
              <SelectGroup
                label="Religion"
                required
                options={[
                  { label: "Islam", value: "Islam" },
                  { label: "Kristen", value: "Kristen" },
                  { label: "Katholik", value: "Katholik" },
                  { label: "Budha", value: "Budha" },
                ]}
              />
            </Grid>
            <Grid item md={4}>
              <SelectGroup
                label="Religion"
                placeholder="Select Religion"
                options={[
                  { label: "Islam", value: "Islam" },
                  { label: "Kristen", value: "Kristen" },
                  { label: "Katholik", value: "Katholik" },
                  { label: "Budha", value: "Budha" },
                ]}
              />
            </Grid>
            <Grid item md={4}>
              <SelectGroup
                label="Religion"
                disabled
                value="Budha"
                options={[
                  { label: "Islam", value: "Islam" },
                  { label: "Kristen", value: "Kristen" },
                  { label: "Katholik", value: "Katholik" },
                  { label: "Budha", value: "Budha" },
                ]}
              />
            </Grid>
            <Grid item md={4}>
              <SelectGroup
                label="Religion"
                readOnly
                value={"Islam"}
                options={[
                  { label: "Islam", value: "Islam" },
                  { label: "Kristen", value: "Kristen" },
                  { label: "Katholik", value: "Katholik" },
                  { label: "Budha", value: "Budha" },
                ]}
              />
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
};

export default SelectGuide;
