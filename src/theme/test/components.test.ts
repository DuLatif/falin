import { describe, expect, test } from "vitest"
import { components } from "../ts/components"

describe("Theme Component", () => {
  test("should match snapshot", () => {
    expect(components).toMatchSnapshot()
  })
})
