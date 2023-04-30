import { SmallCalendar } from "@/components/Calendar"
import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("SmallCalendar", () => {
  test("renders without crashing", () => {
    const { container } = render(<SmallCalendar />)
    const calendarElement = container.querySelector(".react-calendar") as HTMLDivElement
    expect(calendarElement).toBeTruthy()
  })

  test("renders the calendar with custom short weekday labels", () => {
    const { getByText } = render(<SmallCalendar />)
    const listDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sat"]
    let iteration = 0
    while (iteration < listDays.length) {
      expect(getByText(listDays[iteration])).toBeTruthy()
      iteration++
    }
  })
})
