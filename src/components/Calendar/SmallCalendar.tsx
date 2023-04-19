import React from "react"
import { Box } from "@mui/material"
import dayjs from "dayjs"
import { CaretLeft, CaretRight } from "phosphor-react"
import { useEffect, useId } from "react"
import ReactCalendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import classes from "./_.module.scss"

interface ICalendarProps {
  events?: {
    date: string
    color: "info" | "primary" | "danger" | "success" | "warning"
  }[]
}
const SmallCalendar: React.FC<ICalendarProps> = React.forwardRef(({ events }, ref) => {
  const id = useId()
  const listEvents = new Map()

  useEffect(() => {
    events?.forEach((event) => {
      listEvents.set(event.date, event.color)
    })
  }, [events])

  return (
    <Box id={id} className={classes.Box} ref={ref}>
      <ReactCalendar
        className={classes.ReactCalendar}
        prevLabel={<CaretLeft size={22} weight="bold" />}
        nextLabel={<CaretRight size={22} weight="bold" />}
        formatShortWeekday={(_, date) => ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sat"][date.getDay()]}
        tileContent={(content) => {
          const date = dayjs(content.date).format("DD-MM-YYYY")
          const color = listEvents.get(date)
          return (
            <>
              <div className={`event ${color || "default"}`}></div>
            </>
          )
        }}
      />
    </Box>
  )
})

SmallCalendar.displayName = "SmallCalendar"
export default SmallCalendar
