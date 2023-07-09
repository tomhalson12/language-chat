"use client"

import styles from "./ChatThread.module.css"

import { ChatResponse } from "@/types"
import React, { ReactNode } from "react"
import { MessageBubble } from "../MessageBubble"
import { ChatbotResponse } from "../ChatbotResponse"
import { useLanguage } from "@/components/LanguageProvider"

type ChatThreadProps = {
  responses: ChatResponse[]
  savedPhrases: string[]
  addPhrase: (phrase: string) => void
  deletePhrase: (phrase: string) => void
}

export const ChatThread = ({
  responses,
  savedPhrases,
  addPhrase,
  deletePhrase,
}: ChatThreadProps) => {
  const { language } = useLanguage()

  const thread = React.useMemo(
    () =>
      responses.reduce(
        (acc: ReactNode[], response: ChatResponse, index: number) => {
          if (response.isUserMessage) {
            acc.push(
              ...response.messages.map((message) => (
                <MessageBubble
                  isSaved={savedPhrases.includes(message)}
                  isUserMessage={true}
                  language={language}
                  onClick={() => addPhrase(message)}
                  deletePhrase={deletePhrase}
                  key={index}
                  message={message}
                />
              )),
            )
          } else {
            acc.push(
              <ChatbotResponse
                savedPhrases={savedPhrases}
                addPhrase={addPhrase}
                deletePhrase={deletePhrase}
                key={index}
                messages={response.messages}
              />,
            )
          }

          return acc
        },
        [],
      ),
    [responses, addPhrase],
  )

  const scrollDiv = React.useRef<null | HTMLDivElement>(null)

  React.useEffect(() => {
    scrollDiv.current?.scrollIntoView({ behavior: "smooth" })
  }, [responses])

  return (
    <div className={styles.ChatThread}>
      {thread}
      <div ref={scrollDiv} />
    </div>
  )
}
