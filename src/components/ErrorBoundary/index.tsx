import React, { Component, ErrorInfo } from "react"
import { Container, Typography, Box, Card } from "@mui/material"
import { Navigate } from "react-router-dom"
import classes from "./ErrorBoundary.module.scss"
import { shadows } from "@/theme/shadows"
import { combineClasses } from "@/utils/styles"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Update state to indicate that an error has occurred
    this.setState({
      hasError: true,
      error,
    })
    // You can also log the error to an error reporting service
    console.error("Error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (import.meta.env.MODE === "production") return <Navigate to="/error/500" />
      return (
        <Box className={classes.Root}>
          <Container maxWidth="lg" className={classes.Container}>
            <Card sx={{ boxShadow: shadows.lg }} className={classes.Card}>
              <Typography variant="h5" fontWeight={"regular"}>
                Error Encountered:
              </Typography>
              <Typography variant="h5">{this.state.error && this.state.error.toString()}</Typography>
            </Card>
            <Card sx={{ boxShadow: shadows.lg }} className={combineClasses([classes.Card, classes.Stacks])}>
              <Typography variant="h6" className={classes.Title} fontWeight={"bold"}>
                Stack
              </Typography>
              <Typography variant="body2" className={classes.Body}>
                {this.state.error?.stack}
              </Typography>
            </Card>
          </Container>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
