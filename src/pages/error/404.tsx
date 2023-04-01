import React from "react"
import { Container, Typography, Stack, Box } from "@mui/material"

const Error404: React.FC = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} sx={{ height: "100vh" }} spacing={5}>
          <Typography variant="h3" fontWeight={"bold"}>
            404
          </Typography>
          <Box sx={{ borderLeft: "3px solid #21252980", height: "90px" }}></Box>
          <Typography variant="h5"> This page could not be found.</Typography>
        </Stack>
      </Container>
    </>
  )
}

export default Error404
