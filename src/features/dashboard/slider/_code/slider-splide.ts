export const splideSliderCode = `import { Box, Card, Typography } from "@mui/material"
import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"

// Default theme
import "@splidejs/react-splide/css"

// or other themes
// import "@splidejs/react-splide/css/skyblue"
// import "@splidejs/react-splide/css/sea-green"

const SliderGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Slider Guide</Typography>
      <Box mt={4}>
        <Card>
          <Typography variant="subtitle1" mb={1} fontWeight={"semiBold"}>
            Splide Slider
          </Typography>
          <Splide aria-label="My Favorite Images">
            <SplideSlide>
              <img
                src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image 1"
                style={{ width: "100%" }}
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image 2"
                style={{ width: "100%" }}
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="https://images.unsplash.com/photo-1498998754966-9f72acbc85b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image 3"
                style={{ width: "100%" }}
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="https://images.unsplash.com/photo-1477511801984-4ad318ed9846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image 4"
                style={{ width: "100%" }}
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="https://images.unsplash.com/photo-1445510491599-c391e8046a68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image 5"
                style={{ width: "100%" }}
              />
            </SplideSlide>
          </Splide>
        </Card>
      </Box>
    </Box>
  )
}

export default SliderGuide
`

export const splideCustomNavigationCode = `import { Box, Card, Typography,Stack,IconButton } from "@mui/material"
import React , {useRef} from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"

// Default theme
import "@splidejs/react-splide/css"

// or other themes
// import "@splidejs/react-splide/css/skyblue"
// import "@splidejs/react-splide/css/sea-green"

const SliderGuide: React.FC = () => {
  const splideRef = useRef<Splide | null>(null)
  return (
    <Box mt={6}>
      <Typography variant="subtitle1" mb={2} fontWeight={"semiBold"}>
        Custom Navigation
      </Typography>
      <Splide
        aria-label="My Favorite Images"
        ref={splideRef}
        options={{
          rewind: true,
          gap: spacing[8],
          padding: "5rem",
          perPage: 3,
          perMove: 1,
          autoplay: true,
          pagination: false,
          arrows: false,
        }}
      >
        <SplideSlide>
          <Box sx={styles.box}>1</Box>
        </SplideSlide>
        <SplideSlide>
          <Box sx={styles.box}>2</Box>
        </SplideSlide>
        <SplideSlide>
          <Box sx={styles.box}>3</Box>
        </SplideSlide>
        <SplideSlide>
          <Box sx={styles.box}>4</Box>
        </SplideSlide>
        <SplideSlide>
          <Box sx={styles.box}>5</Box>
        </SplideSlide>
        <SplideSlide>
          <Box sx={styles.box}>6</Box>
        </SplideSlide>
        <SplideSlide>
          <Box sx={styles.box}>7</Box>
        </SplideSlide>
        <SplideSlide>
          <Box sx={styles.box}>8</Box>
        </SplideSlide>
      </Splide>
      <Stack direction="row" justifyContent={"center"} spacing={6} sx={{ mt: 4 }}>
        <IconButton onClick={() => splideRef.current?.go("-1")}>
          <ArrowLeft />
        </IconButton>
        <IconButton onClick={() => splideRef.current?.go("+1")}>
          <ArrowRight />
        </IconButton>
      </Stack>
    </Box>
  )
}

export default SliderGuide
`
