// prettier-ignore
"use client"

import { ChatResponse } from "@/types"
import styles from "./Chat.module.css"
import { ChatThread } from "./ChatThread"
import { MessageInput } from "./MessageInput"
import React from "react"
import { sendMessage } from "@/services/chatbotService"
import { useLanguage } from "../LanguageProvider"

export const Chat = () => {
  const { language } = useLanguage()
  const [responses, setResponses] = React.useState<ChatResponse[]>([])

  const sendUserMessage = React.useCallback(
    async (message: string) => {
      const newResponseSet = [
        ...responses,
        { isUserMessage: true, messages: [message] },
      ]

      const botResponse = await sendMessage(language, newResponseSet)

      newResponseSet.push({
        isUserMessage: false,
        messages: botResponse,
      })
      setResponses(newResponseSet)
    },
    [language, responses],
  )

  return (
    <div className={styles.Chat}>
      <ChatThread responses={responses} />
      <MessageInput sendMessage={sendUserMessage} />
    </div>
  )
}
