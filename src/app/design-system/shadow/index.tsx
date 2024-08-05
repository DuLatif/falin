import { shadows } from "@/theme/ts/shadows"
import { Box, Card, Grid, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"

const Shadow: React.FC = () => {
  const [variants, setVariants] = useState<string[]>([])

  useEffect(() => {
    for (const variant of Object.keys(shadows)) {
      setVariants((prev) => (!prev.includes(variant) ? [...prev, variant] : [...prev]))
    }
  }, [])

  return (
    <Box>
      <Typography variant="h6">Shadows</Typography>
      <Card sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {variants.map((variant) => (
            <Grid item key={variant} md={3}>
              <Typography>{variant}</Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "100px",
                  borderRadius: "8px",
                  // @ts-ignore
                  boxShadow: shadows[variant],
                }}
              ></Box>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  )
}

export default Shadow
