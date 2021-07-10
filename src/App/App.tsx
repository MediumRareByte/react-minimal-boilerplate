import * as React from "react"

import { Hello, HelloProps } from "../components/Hello"

export const App: React.FC<HelloProps> = ({compiler, framework}) => (
  <Hello compiler={compiler} framework={framework} />
)
