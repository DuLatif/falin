import { describe, expect, test } from "vitest"
import { components } from "../components"

describe("Theme Component", () => {
  test("should match snapshot", () => {
    expect(components).toMatchSnapshot()
  })
})
