import { describe, expect, test } from "vitest"
import { palette } from "../palette"

describe("Theme Palette", () => {
  test("should match snapshot", () => {
    expect(palette).toMatchSnapshot()
  })
})
