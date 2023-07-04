// prettier-ignore
"use client"

import { ChatResponse, LanguageCode } from "@/types"
import styles from "./Chat.module.css"
import { ChatThread } from "./ChatThread"
import { MessageInput } from "./MessageInput"
import React from "react"
import { sendMessage } from "@/services/chatbotService"

type ChatProps = {
  languageCode: LanguageCode
}

export const Chat = ({ languageCode }: ChatProps) => {
  const [responses, setResponses] = React.useState<ChatResponse[]>([])

  const sendUserMessage = React.useCallback(
    async (message: string) => {
      const newResponseSet = [
        ...responses,
        { isUserMessage: true, messages: [message] },
      ]

      const botResponse = await sendMessage(newResponseSet)

      newResponseSet.push({
        isUserMessage: false,
        messages: botResponse,
      })
      setResponses(newResponseSet)
    },
    [responses],
  )

  return (
    <div className={styles.Chat}>
      <ChatThread languageCode={languageCode} responses={responses} />
      <MessageInput languageCode={languageCode} sendMessage={sendUserMessage} />
    </div>
  )
}
