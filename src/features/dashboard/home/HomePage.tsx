import { Box, Typography, Grid, Card, Stack } from "@mui/material"
import React from "react"
import CardDashboard, { ICardDashboardProps } from "./CardDashboard"
import { CurrencyDollar } from "phosphor-react"
import { SmallCalendar } from "@/components/Calendar"
import { ISmallCalendarEvent } from "@/components/Calendar/SmallCalendar"
import ListEvents from "./ListEvents"
import TableData from "./TableData"

const listDashboard: ICardDashboardProps[] = [
  {
    icon: <CurrencyDollar weight="bold" size={24} />,
    label: "Total Donation",
    value: "25,000",
    progress: 40,
  },
  {
    icon: <CurrencyDollar weight="bold" size={24} />,
    label: "Total Donation",
    value: "25,000",
    progress: 40,
  },
  {
    icon: <CurrencyDollar weight="bold" size={24} />,
    label: "Total Donation",
    value: "25,000",
    progress: 40,
  },
]
const listEventsCalendar: ISmallCalendarEvent[] = [
  { date: "10-05-2023", color: "primary" },
  { date: "12-05-2023", color: "info" },
  { date: "16-06-2023", color: "warning" },
  { date: "21-06-2023", color: "danger" },
  { date: "26-07-2023", color: "success" },
  { date: "29-07-2023", color: "success" },
]

const HomePage: React.FC = () => {
  return (
    <Box>
      <Typography mb={4} variant="h6">
        Welcome
      </Typography>
      <Grid container spacing={4}>
        <Grid item md={8.6}>
          <Grid container spacing={4}>
            {listDashboard.map((item) => (
              <Grid key={item.label} item md={4}>
                <CardDashboard {...item} />
              </Grid>
            ))}
            <Grid item md={12}>
              <TableData />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3.4}>
          <Stack direction="column" spacing={4}>
            <Card sx={{ display: "flex", justifyContent: "center" }}>
              <SmallCalendar events={listEventsCalendar} />
            </Card>
            <ListEvents />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage
