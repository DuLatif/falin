import { readFileSync } from "fs"
import { describe, expect, test } from "vitest"

describe("Upload File Style", () => {
  test("should match file pond style", () => {
    expect(readFileSync(__dirname + "./../styles/FilePond.module.scss")).toMatchSnapshot()
  })
})
