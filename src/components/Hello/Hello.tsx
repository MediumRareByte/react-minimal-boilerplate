import * as React from "react"
import styled from "styled-components"

const Title = styled.h1`
  color: coral;
  font-family: Arial, "Helvetica Neue", sans-serif;
`

export interface HelloProps {
  compiler: string
  framework: string
}

export const Hello: React.FC<HelloProps> = (props: HelloProps) => (
  <Title>
    Hello from {props.compiler} and {props.framework}!
  </Title>
)
