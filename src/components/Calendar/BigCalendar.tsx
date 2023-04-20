import dayGridPlugin from "@fullcalendar/daygrid"
import FullCalendar from "@fullcalendar/react"
import { Box, Button, Stack, Typography, BoxProps } from "@mui/material"
import dayjs from "dayjs"
import { CaretLeft, CaretRight } from "phosphor-react"
import React, { useEffect, useRef, useState } from "react"
import classes from "./styles/BigCalendar.module.scss"

export interface ICalendarEvent {
  title: string
  start: string
  end: string
  className: "neutral" | "primary" | "info" | "warning" | "success" | "danger"
}
interface IBigCalendarProps extends BoxProps {
  events: ICalendarEvent[]
}
const BigCalendar: React.FC<IBigCalendarProps> = React.forwardRef((props, ref) => {
  const { events, ...boxProps } = props
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
    <Box {...boxProps} ref={ref}>
      <Box className={classes.Container}>
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
        <Box className={classes.FullCalendar}>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={false}
            events={events}
          />
        </Box>
      </Box>
    </Box>
  )
})
BigCalendar.displayName = "BigCalendar"
export default BigCalendar
