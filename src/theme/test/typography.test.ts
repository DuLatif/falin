import { describe, expect, test } from "vitest"
import { typography } from "../typography"

describe("Theme Typography", () => {
  test("should match snapshot", () => {
    expect(typography).toMatchSnapshot()
  })
})
