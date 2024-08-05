import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import UploadFile, { UploadFilePond } from "../index"

describe("UploadFile", () => {
  test("render UploadFile without crashing", () => {
    const { getByText } = render(<UploadFile />)
    expect(getByText("Click to upload")).toBeTruthy()
  })

  test("render UploadFilePond without crashing", () => {
    const { container } = render(<UploadFilePond />)
    expect(container.querySelector(".filepond--wrapper")).toBeTruthy()
  })
})
