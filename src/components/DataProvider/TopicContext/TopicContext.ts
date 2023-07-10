"use client"

import React from "react"
import { Action } from "../DataStateReducer"

interface TopicContext {
  selectedTopic: string | undefined
  setTopic: (topic: string | undefined) => void
}

export const buildTopicContextValue = (
  currentTopic: string | undefined,
  dispatch: React.Dispatch<Action>,
): TopicContext => ({
  selectedTopic: currentTopic,
  setTopic: (topic: string | undefined) =>
    dispatch({ type: "setTopic", topic }),
})

export const TopicContext = React.createContext<TopicContext>({
  selectedTopic: undefined,
  setTopic: () => {},
})
