import { Box, Card, Typography } from "@mui/material"
import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"

// Default theme
import "@splidejs/react-splide/css"
import CodeSnippet from "@/components/CodeSnippet"
import { splideSliderCode } from "./_code/slider-splide"

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
          <Typography mb={1}>
            This component using library{" "}
            <a href="https://splidejs.com/integration/react-splide/" className="link" target="_blank" rel="noreferrer">
              Splide.js
            </a>
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
          <CodeSnippet code={splideSliderCode} />
        </Card>
      </Box>
    </Box>
  )
}

export default SliderGuide
