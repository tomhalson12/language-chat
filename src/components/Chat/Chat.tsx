"use client"
import React from "react"

import styles from "./Chat.module.css"

import { ChatResponse } from "@/types"
import { ChatThread } from "./ChatThread"
import { MessageInput } from "./MessageInput"

import { sendMessage, startTopicConversation } from "@/services/chatbotService"
import { useLanguage } from "../LanguageProvider"

interface ChatProps {
  topic?: string
}

export const Chat = ({ topic }: ChatProps) => {
  const { language } = useLanguage()
  const [responses, setResponses] = React.useState<ChatResponse[]>([])

  React.useEffect(() => {
    setResponses([])
  }, [language, topic])

  React.useEffect(() => {
    const startTopicConvo = async () => {
      if (topic) {
        const botResponse = await startTopicConversation(language, topic)
        setResponses([
          {
            isUserMessage: false,
            messages: botResponse,
          },
        ])
      }
    }

    startTopicConvo()
  }, [topic])

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
