import { Card, Typography } from "@mui/material"
import React from "react"
import classes from "./_.module.scss"
import { bigCalendarCode } from "./_code/big-calendar"
import CodeSnippet from "@/ui/components/CodeSnippet"
import { BigCalendar, ICalendarEvent } from "@/ui/components/Calendar"

const listEvents: ICalendarEvent[] = [
  {
    title: "First Dreams",
    start: "2023-04-13",
    end: "2023-04-15",
    className: "info",
  },
  {
    title: "First Dreams",
    start: "2023-04-21",
    end: "2023-04-22",
    className: "warning",
  },
  {
    title: "First Dreams",
    start: "2023-04-03",
    end: "2023-04-06",
    className: "primary",
  },
  {
    title: "First Dreams",
    start: "2023-04-08",
    end: "2023-04-10",
    className: "success",
  },
]

const BigCalendarGuide: React.FC = () => {
  return (
    <Card className={classes.Container}>
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Big Calendar
      </Typography>
      <Typography mb={1}>
        This component using library{" "}
        <a href="https://fullcalendar.io/docs/react" className="link" target="_blank" rel="noreferrer">
          React Full Calendar
        </a>
      </Typography>
      <BigCalendar events={listEvents} />
      <CodeSnippet code={bigCalendarCode} />
    </Card>
  )
}

export default BigCalendarGuide
