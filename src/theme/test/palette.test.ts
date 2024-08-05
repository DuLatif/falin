import { describe, expect, test } from "vitest"
import { palette } from "../ts/palette"

describe("Theme Palette", () => {
  test("should match snapshot", () => {
    expect(palette).toMatchSnapshot()
  })
})
