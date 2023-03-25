const baseContainer = (code: string) => {
  return `import React from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";

const App : React.FC = () => {
  return (
    <Box>
      ${code}
    </Box>
  )
}`;
};

export const badgeActionClickableCode =
  baseContainer(`<Typography fontWeight={"semiBold"} color={"text.secondary"} mb={1}>
        Badge Clickable
      </Typography>
      <Stack direction="row" spacing={2}>
        <Chip label="Badge Filled" onClick={() => alert("clicked")} />
        <Chip
          label="Badge Outlined"
          variant="outlined"
          onClick={() => alert("clicked")}
        />
      </Stack>`);

export const badgeActionDeleteableCode =
  baseContainer(`<Typography fontWeight={"semiBold"} color={"text.secondary"} mb={1}>
        Badge Deleteable
      </Typography>
      <Stack direction="row" gap={2} flexWrap="wrap">
        <Chip label="Badge Filled" onDelete={() => alert("deleted!")} />
        <Chip
          label="Badge Outlined"
          variant="outlined"
          onDelete={() => alert("deleted!")}
        />
        <Chip
          label="Badge Custom Icon"
          variant="outlined"
          onDelete={() => alert("deleted!")}
          deleteIcon={<X weight="bold" size={18} />}
        />
      </Stack>`);
