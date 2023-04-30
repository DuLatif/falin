import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Modal } from "../index"

describe("Modal", () => {
  test("render modal without crashing", () => {
    const { getByText } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Modal open={true} onClose={() => {}}>
        <>modal-content</>
      </Modal>
    )

    expect(getByText("modal-content")).toBeTruthy()
  })

  test("render modal heading without crashing", () => {
    const { getByText } = render(<Modal.Header title="modal-title" subtitle="modal-subtitle" />)
    expect(getByText("modal-title")).toBeTruthy()
    expect(getByText("modal-subtitle")).toBeTruthy()
  })

  test("render modal body without crashing", () => {
    const { getByText } = render(
      <Modal.Body>
        <p>modal-content</p>
      </Modal.Body>
    )

    expect(getByText("modal-content")).toBeTruthy()
  })

  test("render modal foother without crashing", () => {
    const { getByText } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Modal.Footer onCancel={() => {}}>
        <p>modal-footer</p>
      </Modal.Footer>
    )

    expect(getByText("Cancel")).toBeTruthy()
    expect(getByText("modal-footer")).toBeTruthy()
  })
})
