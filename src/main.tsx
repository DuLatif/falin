import { CssBaseline, ThemeProvider } from "@mui/material"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import { theme } from "./theme/theme"
import "./theme/nprogress.css"
import ErrorBoundary from "./components/ErrorBoundary"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
