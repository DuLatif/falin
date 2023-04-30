import { readFileSync } from "fs"
import { describe, expect, test } from "vitest"

describe("Modal Style", () => {
  test("should match modal style", () => {
    expect(readFileSync(__dirname + "./../styles/Modal.module.scss")).toMatchSnapshot()
  })

  test("should match modal error style", () => {
    expect(readFileSync(__dirname + "./../styles/ModalError.module.scss")).toMatchSnapshot()
  })
})
