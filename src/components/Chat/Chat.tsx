"use client"
import React, { useTransition } from "react"

import styles from "./Chat.module.css"

import { ChatResponse } from "@/types"
import { ChatThread } from "./ChatThread"
import { MessageInput } from "./MessageInput"

import { sendMessage, startTopicConversation } from "@/services/chatbotService"
import { useDifficulty, useLanguage, useTopic } from "../DataProvider"

export const Chat = () => {
  const { language } = useLanguage()
  const { selectedTopic } = useTopic()
  const { difficulty } = useDifficulty()
  const [responses, setResponses] = React.useState<ChatResponse[]>([])
  const [isPending, startTransition] = useTransition()

  React.useEffect(() => {
    setResponses([])
  }, [language, selectedTopic])

  React.useEffect(() => {
    startTransition(() => {
      const startTopicConvo = async () => {
        if (selectedTopic && language) {
          const botResponse = await startTopicConversation(
            language,
            difficulty,
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
    })
  }, [selectedTopic])

  const sendUserMessage = React.useCallback(
    async (message: string) => {
      if (language) {
        const newResponseSet = [
          ...responses,
          { isUserMessage: true, messages: [message] },
        ]

        setResponses(newResponseSet)

        startTransition(async () => {
          const botResponse = await sendMessage(
            language,
            difficulty,
            newResponseSet,
          )

          newResponseSet.push({
            isUserMessage: false,
            messages: botResponse,
          })
          setResponses(newResponseSet)
        })
      }
    },
    [language, responses],
  )

  return (
    <div className={styles.Chat}>
      <ChatThread responses={responses} waitingForChatbot={isPending} />
      <MessageInput sendMessage={sendUserMessage} disabled={isPending} />
    </div>
  )
}
