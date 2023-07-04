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
      const botResponse = await sendMessage()
      setResponses([
        ...responses,
        { isUserMessage: true, messages: [message] },
        { isUserMessage: false, messages: botResponse },
      ])
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
