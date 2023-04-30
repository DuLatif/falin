import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import InputFile from "./InputFile"

describe("Input File", () => {
  test("render without crashing", () => {
    const { getByText } = render(<InputFile label="file-input" />)
    expect(getByText("file-input")).toBeTruthy()
  })

  test("render with showing helper text", () => {
    const { getByText } = render(<InputFile label="label" helperText="helper-message" />)
    expect(getByText("helper-message")).toBeTruthy()
  })
})
