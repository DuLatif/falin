import { Card, Typography } from "@mui/material"
import React from "react"
import { smallCalendarCode } from "./_code/small-calendar"
import CodeSnippet from "@/ui/components/CodeSnippet"
import { SmallCalendar } from "@/ui/sections/Calendar"

const SmallCalendarGuide: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Small Calendar
      </Typography>
      <Typography mb={1}>
        This component using library{" "}
        <a href="https://www.npmjs.com/package/react-calendar" className="link" target="_blank" rel="noreferrer">
          React Calendar
        </a>
      </Typography>
      <SmallCalendar
        events={[
          { date: "10-04-2023", color: "primary" },
          { date: "12-04-2023", color: "info" },
          { date: "16-04-2023", color: "warning" },
          { date: "21-04-2023", color: "danger" },
          { date: "26-04-2023", color: "success" },
        ]}
      />
      <CodeSnippet code={smallCalendarCode} />
    </Card>
  )
}

export default SmallCalendarGuide
