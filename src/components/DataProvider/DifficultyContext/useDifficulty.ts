import React from "react"
import { DifficultyContext } from "./DifficultyContext"

export const useDifficulty = () => {
  const context = React.useContext(DifficultyContext)
  if (context === undefined) {
    throw new Error("useDifficulty must be used within a DifficultyProvider")
  }
  return context
}
