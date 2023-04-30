import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import InputGroup from "./InputGroup"

describe("Input Group", () => {
  test("render without crashing", () => {
    const { getByText } = render(<InputGroup label="input-label" />)
    expect(getByText("input-label")).toBeTruthy()
  })

  test("render with showing error message", () => {
    const { getByText } = render(<InputGroup label="input-label" error helperText="error-message" />)
    expect(getByText("error-message")).toBeTruthy()
  })
})
