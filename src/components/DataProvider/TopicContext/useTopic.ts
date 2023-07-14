import React from "react"

import { TopicContext } from "./TopicContext"

export const useTopic = () => {
  const context = React.useContext(TopicContext)
  if (context === undefined) {
    throw new Error("useTopic must be used within a TopicProvider")
  }
  return context
}
