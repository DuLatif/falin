import { BigCalendar } from "@/components/Calendar"
import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("BigCalendar", () => {
  test("renders without crashing", () => {
    const { container } = render(<BigCalendar />)
    const calendarElement = container.querySelector(".full-calendar") as HTMLDivElement
    expect(calendarElement).toBeTruthy()
  })
})
