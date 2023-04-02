import { describe, expect, test } from "vitest"
import { shadows, shadowsArray } from "../shadows"

describe("Theme Shadows", () => {
  test("should match shadows object variants", () => {
    expect(shadows).toMatchSnapshot()
  })

  test("should match shadows array", () => {
    expect(shadowsArray).toMatchSnapshot()
  })
})
