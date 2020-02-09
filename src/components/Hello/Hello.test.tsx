import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import { Hello } from "."

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it("renders with or without a name", () => {
  act(() => {
    render(<Hello compiler="TS" framework="React" />, container)
  })
  expect(container.textContent).toBe("Hello from TS and React!")

  act(() => {
    render(<Hello compiler="Babel" framework="Jest" />, container)
  })
  expect(container.textContent).toBe("Hello from Babel and Jest!")
})
