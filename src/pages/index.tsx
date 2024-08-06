import { primary } from "@/theme/ts/colors"
import { Box, Stack, SxProps, Button, Typography } from "@mui/material"
import { GitBranch, FileSearch } from "phosphor-react"
import React from "react"
import { Link } from "react-router-dom"

const styles: { container: SxProps; icon: SxProps; button: SxProps } = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "100px",
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(180deg, #ffffff 45.16%, ${primary[100]} 131.72%)`,
  },
  icon: {
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "160px",
    height: "160px",
    "& img": { height: "100%" },
  },
  button: {
    width: "200px",
  },
}
const WelcomePage: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <Stack direction="row" spacing={10}>
        <Box
          sx={{
            ...styles.icon,
          }}
        >
          <img src="https://logospng.org/download/vite-js/vite-js-4096-logo.png" />
        </Box>
        <Box
          sx={{
            borderRadius: "50%",
            ...styles.icon,
          }}
        >
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" />
        </Box>
        <Box
          sx={{
            ...styles.icon,
          }}
        >
          <img src="https://falin.netlify.app/favicon.svg" />
        </Box>
      </Stack>
      <Box>
        <Typography variant="h3" fontWeight={"semiBold"}>
          Falin UI
        </Typography>
      </Box>
      <Stack direction="row" spacing={4}>
        <Link to="/design-system/home">
          <Button size="xl" sx={styles.button} startIcon={<FileSearch size={26} weight="regular" />}>
            Documentation
          </Button>
        </Link>
        <a href="https://github.com/BJ-stack-art/falin" target="_blank" rel="noreferrer">
          <Button size="xl" sx={styles.button} color="inherit" startIcon={<GitBranch size={26} weight="regular" />}>
            Github
          </Button>
        </a>
      </Stack>
    </Box>
  )
}

export default WelcomePage
