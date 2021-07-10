import React from "react"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Hello } from "."

describe("Compiler and framework props", () => {
  it('renders the text correctly', () => {
    render(<Hello compiler="TS" framework="React" />)
    expect(screen.findByText('Hello from TS and React')).toBeTruthy()
  })
})
