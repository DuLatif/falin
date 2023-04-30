import { readFileSync } from "fs"
import { describe, expect, test } from "vitest"

describe("Modal Utils", () => {
  test("should match color variant snapshot", () => {
    expect(readFileSync(__dirname + "./../utils/colorVariant.ts")).toMatchSnapshot()
  })

  test("should match syntax highlighting snapshot", () => {
    expect(readFileSync(__dirname + "./../utils/syntaxHighlight.ts")).toMatchSnapshot()
  })
})
