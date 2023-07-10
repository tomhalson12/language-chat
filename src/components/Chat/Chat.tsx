"use client"
import React from "react"

import styles from "./Chat.module.css"

import { ChatResponse } from "@/types"
import { ChatThread } from "./ChatThread"
import { MessageInput } from "./MessageInput"

import { sendMessage, startTopicConversation } from "@/services/chatbotService"
import { useLanguage, useTopic } from "../DataProvider"

export const Chat = () => {
  const { language } = useLanguage()
  const { selectedTopic } = useTopic()
  const [responses, setResponses] = React.useState<ChatResponse[]>([])

  React.useEffect(() => {
    setResponses([])
  }, [language, selectedTopic])

  React.useEffect(() => {
    const startTopicConvo = async () => {
      if (selectedTopic && language) {
        const botResponse = await startTopicConversation(
          language,
          selectedTopic,
        )
        setResponses([
          {
            isUserMessage: false,
            messages: botResponse,
          },
        ])
      }
    }

    startTopicConvo()
  }, [selectedTopic])

  const sendUserMessage = React.useCallback(
    async (message: string) => {
      if (language) {
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
      }
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
