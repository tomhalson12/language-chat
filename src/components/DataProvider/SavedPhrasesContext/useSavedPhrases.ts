import React from "react"

import { SavedPhrasesContext } from "./SavedPhrasesContext"

export const useSavedPhrases = () => {
  const context = React.useContext(SavedPhrasesContext)
  if (context === undefined) {
    throw new Error(
      "useSavedPhrases must be used within a SavedPhrasesProvider",
    )
  }
  return context
}
