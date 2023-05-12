import React from "react"
import { Card, Box, Typography } from "@mui/material"
import classes from "./styles/CardDashboard.module.scss"

export interface ICardDashboardProps {
  icon: React.ReactNode
  label: string
  value: string
  progress: number
}
const CardDashboard: React.FC<ICardDashboardProps> = ({ icon, label, value, progress }) => {
  return (
    <Card className={classes.Card}>
      <Box className={classes.Icon}>{icon}</Box>
      <Box className={classes.Content}>
        <Typography className={classes.Label}>{label}</Typography>
        <Typography className={classes.Value}>{value}</Typography>
        <Box className={classes.Progress}>
          <Typography className={classes.Progress_Value}>{progress}%</Typography>
          <Typography>vs last month</Typography>
        </Box>
      </Box>
    </Card>
  )
}

export default CardDashboard
