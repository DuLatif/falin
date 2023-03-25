const baseContainer = (code: string) => {
  return `import React from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";

const App : React.FC = () => {
  return (
    <Box>
      ${code}
    </Box>
  )
}`;
};

export const basicSelectCode = baseContainer(`<FormControl>
        <FormLabel htmlFor="religion">Basic Select</FormLabel>
        <Select id="religion">
          <MenuItem value="Islam">Islam</MenuItem>
          <MenuItem value="Kristen">Kristen</MenuItem>
          <MenuItem value="Katholik">Katholik</MenuItem>
          <MenuItem value="Budha">Budha</MenuItem>
          <MenuItem value="Hindu">Hindu</MenuItem>
        </Select>
      </FormControl>`);

export const basicSelectPlaceholderCode = baseContainer(`<FormControl>
        <FormLabel htmlFor="religion">Select with placeholder</FormLabel>
        <Select defaultValue={" "} id="religion">
          <MenuItem value=" ">-- Religion ---</MenuItem>
          <MenuItem value="Islam">Islam</MenuItem>
          <MenuItem value="Kristen">Kristen</MenuItem>
          <MenuItem value="Katholik">Katholik</MenuItem>
          <MenuItem value="Budha">Budha</MenuItem>
          <MenuItem value="Hindu">Hindu</MenuItem>
        </Select>
        <FormHelperText>This is a helper text</FormHelperText>
      </FormControl>`);

export const basicRequiredSelectCode = baseContainer(`<FormControl required>
        <FormLabel htmlFor="religion">Required Select</FormLabel>
        <Select id="religion">
          <MenuItem value="Islam">Islam</MenuItem>
          <MenuItem value="Kristen">Kristen</MenuItem>
          <MenuItem value="Katholik">Katholik</MenuItem>
          <MenuItem value="Budha">Budha</MenuItem>
          <MenuItem value="Hindu">Hindu</MenuItem>
        </Select>
      </FormControl>`);

export const basicSelectErrorCode = baseContainer(`<FormControl required error>
        <FormLabel htmlFor="religion">Select Error</FormLabel>
        <Select id="religion">
          <MenuItem value="Islam">Islam</MenuItem>
          <MenuItem value="Kristen">Kristen</MenuItem>
          <MenuItem value="Katholik">Katholik</MenuItem>
          <MenuItem value="Budha">Budha</MenuItem>
          <MenuItem value="Hindu">Hindu</MenuItem>
        </Select>
        <FormHelperText>This is a error message</FormHelperText>
      </FormControl>`);

export const basicDisabledSelectCode =
  baseContainer(`<FormControl required disabled>
        <FormLabel htmlFor="religion">Disabled Select</FormLabel>
        <Select defaultValue={"Islam"} id="religion">
          <MenuItem value="Islam">Islam</MenuItem>
          <MenuItem value="Kristen">Kristen</MenuItem>
          <MenuItem value="Katholik">Katholik</MenuItem>
          <MenuItem value="Budha">Budha</MenuItem>
          <MenuItem value="Hindu">Hindu</MenuItem>
        </Select>
      </FormControl>`);
