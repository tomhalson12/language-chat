"use client"

import React from "react"
import { Action } from "../DataStateReducer"

interface SavedPhrasesContext {
  savedPhrases: string[]
  addPhrase: (phrase: string) => void
  deletePhraseByIndex: (index: number) => void
  deletePhraseByContent: (phrase: string) => void
}

export const buildSavedPhrasesContextValue = (
  currentPhrases: string[],
  dispatch: React.Dispatch<Action>,
): SavedPhrasesContext => ({
  savedPhrases: currentPhrases,
  addPhrase: (phrase: string) => dispatch({ type: "addPhrase", phrase }),
  deletePhraseByIndex: (index: number) =>
    dispatch({ type: "deletePhraseByIndex", index }),
  deletePhraseByContent: (phrase: string) =>
    dispatch({ type: "deletePhraseByContent", phrase }),
})

export const SavedPhrasesContext = React.createContext<SavedPhrasesContext>({
  savedPhrases: [],
  addPhrase: () => {},
  deletePhraseByIndex: () => {},
  deletePhraseByContent: () => {},
})
