import { render } from "@testing-library/react"
import { describe, test, expect } from "vitest"
import Checkbox from "./Checkbox"

describe("Checkbox", () => {
  test("render without crashing", () => {
    const { getByText } = render(<Checkbox label="Label" />)
    expect(getByText("Label")).toBeTruthy()
  })
})
