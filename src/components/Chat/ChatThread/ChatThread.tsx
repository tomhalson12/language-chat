"use client"

import styles from "./ChatThread.module.css"

import { ChatResponse, Language } from "@/types"
import React, { ReactNode } from "react"
import { MessageBubble } from "../MessageBubble"
import { ChatbotResponse } from "../ChatbotResponse"
import { useLanguage, useSavedPhrases } from "@/components/DataProvider"

type ChatThreadProps = {
  responses: ChatResponse[]
  waitingForChatbot: boolean
  translateMessage: (msg: string, language: Language) => Promise<string>
}

export const ChatThread = ({
  responses,
  waitingForChatbot,
  translateMessage,
}: ChatThreadProps) => {
  const { language } = useLanguage()
  const { savedPhrases, addPhrase, deletePhraseByContent } = useSavedPhrases()

  const scrollDiv = React.useRef<null | HTMLDivElement>(null)

  React.useEffect(() => {
    scrollDiv.current?.scrollIntoView({ behavior: "smooth" })
  }, [responses, waitingForChatbot])

  return (
    <div className={styles.ChatThread}>
      {responses.reduce(
        (acc: ReactNode[], response: ChatResponse, index: number) => {
          if (response.isUserMessage) {
            acc.push(
              ...response.messages.map((message) => (
                <MessageBubble
                  isSaved={savedPhrases.includes(message)}
                  isUserMessage={true}
                  language={language}
                  onClick={() => addPhrase(message)}
                  deletePhrase={deletePhraseByContent}
                  translateMsg={translateMessage}
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
                deletePhrase={deletePhraseByContent}
                translateMsg={translateMessage}
                key={index}
                messages={response.messages}
              />,
            )
          }

          return acc
        },
        [],
      )}
      <div ref={scrollDiv} />
      {waitingForChatbot ? (
        <div className={styles.ChatThread__Loading}>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={styles.ChatThread__LoadingDot}
              style={{
                background: `var(--${language}Color)`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
