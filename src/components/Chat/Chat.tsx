"use client"
import React from "react"

import styles from "./Chat.module.css"

import { ChatResponse } from "@/types"
import { ChatThread } from "./ChatThread"
import { MessageInput } from "./MessageInput"
import { useLanguage } from "../LanguageProvider"
import { sendMessage } from "@/services/chatbotService"

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
