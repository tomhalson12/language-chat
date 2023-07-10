"use client"

import React from "react"
import { ReactNode } from "react"
import { dataStateReducer } from "./DataStateReducer"
import { LanguageContext, buildLanguageContextValue } from "./LanguageContext"
import { TopicContext, buildTopicContextValue } from "./TopicContext"
import {
  SavedPhrasesContext,
  buildSavedPhrasesContextValue,
} from "./SavedPhrasesContext"
import {
  DifficultyContext,
  buildDifficultyContextValue,
} from "./DifficultyContext"

interface DataProviderProps {
  children: ReactNode
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [state, dispatch] = React.useReducer(dataStateReducer, {
    language: undefined,
    selectedTopic: undefined,
    savedPhrases: [],
    difficulty: "beginner",
  })

  const languageContext = React.useMemo(
    () => buildLanguageContextValue(state.language, dispatch),
    [state.language, dispatch],
  )

  const topicContext = React.useMemo(
    () => buildTopicContextValue(state.selectedTopic, dispatch),
    [state.selectedTopic, dispatch],
  )

  const savedPhrasesContext = React.useMemo(
    () => buildSavedPhrasesContextValue(state.savedPhrases, dispatch),
    [state.savedPhrases, dispatch],
  )

  const difficultyContext = React.useMemo(
    () => buildDifficultyContextValue(state.difficulty, dispatch),
    [state.difficulty, dispatch],
  )

  return (
    <LanguageContext.Provider value={languageContext}>
      <DifficultyContext.Provider value={difficultyContext}>
        <TopicContext.Provider value={topicContext}>
          <SavedPhrasesContext.Provider value={savedPhrasesContext}>
            {children}
          </SavedPhrasesContext.Provider>
        </TopicContext.Provider>
      </DifficultyContext.Provider>
    </LanguageContext.Provider>
  )
}
