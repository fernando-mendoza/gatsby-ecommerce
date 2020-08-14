import React from "react"
import { StyledJumbo } from "../styles/components"

export default function jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>El mejor material, al mejor precio.</h2>
        <small>{description}</small>
      </div>
    </StyledJumbo>
  )
}
