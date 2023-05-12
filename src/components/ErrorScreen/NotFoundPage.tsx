import React from "react"
import { Container, Typography, Stack, Button, Box } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"
import classes from "./_.module.scss"
import { useNavigate } from "react-router-dom"

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Container maxWidth="xl" className={classes.Container}>
      <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} sx={{ height: "100vh" }} spacing={5}>
        <Typography className={classes.ErrorCode}>404</Typography>
        <Box sx={{ textAlign: "center", paddingBottom: "24px", paddingTop: "32px" }}>
          <Typography variant="h5" fontWeight={"semiBold"} mb={3}>
            Something missing
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            We can&apos;t seem to find page you&apos;re looking
          </Typography>
        </Box>
        <Button size="xl" startIcon={<ArrowBack />} onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Stack>
    </Container>
  )
}

export default NotFoundPage
