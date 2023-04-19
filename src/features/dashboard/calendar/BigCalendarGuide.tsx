import dayGridPlugin from "@fullcalendar/daygrid"
import FullCalendar from "@fullcalendar/react"
import { Box, Button, Card, Stack, Typography } from "@mui/material"
import dayjs from "dayjs"
import { CaretLeft, CaretRight } from "phosphor-react"
import React, { useEffect, useRef, useState } from "react"
import classes from "./_.module.scss"
import CodeSnippet from "@/components/CodeSnippet"
import { bigCalendarCode } from "./_code/big-calendar"

const listEvents = [
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
  const calendarRef = useRef(null)
  const [calendarApi, setCalendarApi] = useState<any>(null)
  const [title, setTitle] = useState("")

  useEffect(() => {
    setTitle(dayjs().format("MMMM YYYY"))
  }, [])

  useEffect(() => {
    const calendarApi = calendarRef?.current
    if (calendarApi) {
      // @ts-ignore
      setCalendarApi(calendarApi.getApi())
    }
  }, [calendarRef])

  const onPrev = () => {
    calendarApi.prev()
    setTitle(dayjs(calendarApi.getDate()).format("MMMM YYYY"))
  }

  const onNext = () => {
    calendarApi.next()
    setTitle(dayjs(calendarApi.getDate()).format("MMMM YYYY"))
  }

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
      <Box>
        <Box className="p-dashboard">
          <Stack direction="row" alignItems={"center"} justifyContent="space-between">
            <Box>
              <Typography variant="subtitle2">{title}</Typography>
            </Box>
            <Box className={classes.Navigation}>
              <Button color="inherit" variant="text" data-shape="icon" onClick={onPrev}>
                <CaretLeft weight="bold" size={28} />
              </Button>
              <Button color="inherit" variant="text" data-shape="icon" onClick={onNext}>
                <CaretRight weight="bold" size={28} />
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box className={classes.FullCalendar}>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={false}
            events={listEvents}
          />
        </Box>
      </Box>
      <CodeSnippet code={bigCalendarCode} />
    </Card>
  )
}

export default BigCalendarGuide
