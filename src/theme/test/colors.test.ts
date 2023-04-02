import { describe, expect, test } from "vitest"
import { danger, info, neutral, primary, success, warning } from "../colors"
import { readFileSync } from "fs"

describe("Theme Color", () => {
  test("should match neutral snapshot", () => {
    expect(neutral).toMatchSnapshot()
  })

  test("should match primary snapshot", () => {
    expect(primary).toMatchSnapshot()
  })

  test("should match success snapshot", () => {
    expect(success).toMatchSnapshot()
  })

  test("should match info snapshot", () => {
    expect(info).toMatchSnapshot()
  })

  test("should match warning snapshot", () => {
    expect(warning).toMatchSnapshot()
  })

  test("should match danger snapshot", () => {
    expect(danger).toMatchSnapshot()
  })

  test("should match scss variables snapshot", () => {
    expect(readFileSync(__dirname + "./../scss/colors.scss")).toMatchSnapshot()
  })
})
