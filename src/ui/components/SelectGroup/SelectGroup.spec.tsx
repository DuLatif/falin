import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import SelectGroup from "./SelectGroup"

describe("Select Group", () => {
  test("render select group without crashing", () => {
    const { getByText } = render(
      <SelectGroup label="select-label" defaultValue="" options={[{ label: "option-1", value: "option-1" }]} />
    )
    expect(getByText("select-label")).toBeTruthy()
  })
})
