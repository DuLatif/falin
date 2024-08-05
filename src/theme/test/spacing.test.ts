import { describe, expect, test } from "vitest"
import { spacing } from "../ts/spacing"

describe("Theme Spacing", () => {
  test("should match snapshot", () => {
    expect(spacing).toMatchSnapshot()
  })
})
