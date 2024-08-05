import { describe, expect, test } from "vitest"
import { typography } from "../ts/typography"
import { readFileSync } from "fs"

describe("Theme Typography", () => {
  test("should match snapshot", () => {
    expect(typography).toMatchSnapshot()
  })

  test("should match scss variables snapshot", () => {
    expect(readFileSync(__dirname + "./../scss/typography.scss")).toMatchSnapshot()
  })
})
