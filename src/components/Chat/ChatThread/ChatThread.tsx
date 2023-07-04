import styles from "./ChatThread.module.css"

import { ChatResponse, LanguageCode } from "@/types"
import React, { ReactNode } from "react"
import { MessageBubble } from "../MessageBubble"
import { ChatbotResponse } from "../ChatbotResponse"

type ChatThreadProps = {
  languageCode: LanguageCode
  responses: ChatResponse[]
}

export const ChatThread = ({ languageCode, responses }: ChatThreadProps) => {
  const thread = React.useMemo(
    () =>
      responses.reduce(
        (acc: ReactNode[], response: ChatResponse, index: number) => {
          if (response.isUserMessage) {
            acc.push(
              ...response.messages.map((message) => (
                <MessageBubble key={index} message={message} />
              )),
            )
          } else {
            acc.push(
              <ChatbotResponse
                key={index}
                languageCode={languageCode}
                messages={response.messages}
              />,
            )
          }

          return acc
        },
        [],
      ),
    [responses, languageCode],
  )

  return <div className={styles.ChatThread}>{thread}</div>
}
