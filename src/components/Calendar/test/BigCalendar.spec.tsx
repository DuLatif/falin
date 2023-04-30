import { BigCalendar, ICalendarEvent } from "@/components/Calendar"
import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("BigCalendar", () => {
  test("renders without crashing", () => {
    const { container } = render(<BigCalendar />)
    const calendarElement = container.querySelector(".full-calendar") as HTMLDivElement
    expect(calendarElement).toBeTruthy()
  })

  test("renders event properly", () => {
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
      {
        title: "First Dreams",
        start: "2023-04-12",
        end: "2023-04-14",
        className: "danger",
      },
    ]

    const { container } = render(<BigCalendar events={listEvents} />)
    expect(container.querySelector("a.fc-daygrid-event.primary")).toBeTruthy()
    expect(container.querySelector("a.fc-daygrid-event.info")).toBeTruthy()
    expect(container.querySelector("a.fc-daygrid-event.warning")).toBeTruthy()
    expect(container.querySelector("a.fc-daygrid-event.success")).toBeTruthy()
    expect(container.querySelector("a.fc-daygrid-event.danger")).toBeTruthy()
  })
})
