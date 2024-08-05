import { render } from "@testing-library/react"
import { describe, test, expect } from "vitest"
import InputDate from "./InputDate"

describe("Input Date", () => {
  test("render without crashing", () => {
    const { getByText } = render(<InputDate label="date-label" />)
    expect(getByText("date-label")).toBeTruthy()
  })

  test("render with showing error validation", () => {
    const { getByText } = render(<InputDate label="input-label" error helperText="error-message" />)
    expect(getByText("error-message")).toBeTruthy()
  })
})
