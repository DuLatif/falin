import { describe, expect, test } from "vitest"
import { shadows, shadowsArray } from "../ts/shadows"
import { readFileSync } from "fs"

describe("Theme Shadows", () => {
  test("should match shadows object variants", () => {
    expect(shadows).toMatchSnapshot()
  })

  test("should contains the correct variants", () => {
    const listVariants = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]
    const listKeys = Object.keys(shadows)
    let iteration = 0
    let result = true
    while (iteration < listVariants.length) {
      result = listKeys.includes(listVariants[iteration])
      if (!result) break
      iteration++
    }
    expect(result).toBeTruthy()
  })

  test("should match shadows array", () => {
    expect(shadowsArray).toMatchSnapshot()
  })

  test("should match the correct array length", () => {
    expect(shadowsArray.length).toBe(25)
  })

  test("should match scss variables snapshot", () => {
    expect(readFileSync(__dirname + "./../scss/shadows.scss")).toMatchSnapshot()
  })
})
