import { render } from "@testing-library/react"
import { describe, test, expect } from "vitest"
import Render from "./Render"

describe("Render", () => {
  test("render without crashing", () => {
    const { getByText } = render(<Render in={true}>render-child</Render>)
    expect(getByText("render-child")).toBeTruthy()
  })
})
