import { readFileSync } from "fs"
import { describe, expect, test } from "vitest"

describe("Upload File Utils", () => {
  test("should match getStyles snapshot", () => {
    expect(readFileSync(__dirname + "./../utils/getStyles.ts")).toMatchSnapshot()
  })

  test("should match useLogic snapshot", () => {
    expect(readFileSync(__dirname + "./../utils/useLogic.ts")).toMatchSnapshot()
  })
})
