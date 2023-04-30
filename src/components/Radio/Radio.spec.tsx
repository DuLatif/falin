import { render } from "@testing-library/react"
import { describe, test, expect } from "vitest"
import Radio from "./Radio"

describe("Radio", () => {
  test("render without crashing", () => {
    const { getByText } = render(<Radio label="Label" />)
    expect(getByText("Label")).toBeTruthy()
  })
})
