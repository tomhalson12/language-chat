"use client"
import React, { useTransition } from "react"

import styles from "./Chat.module.css"

import { ChatResponse } from "@/types"
import { ChatThread } from "./ChatThread"
import { MessageInput } from "./MessageInput"

import { sendMessage, startTopicConversation } from "@/services/chatbotService"
import { useDifficulty, useLanguage, useTopic } from "../DataProvider"
import { translate } from "@/services/translationService"
import { GoInfo } from "react-icons/go"

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
  }, [difficulty, language, selectedTopic])

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
    [difficulty, language, responses],
  )

  const translateMessage = React.useCallback(
    async (message: string): Promise<string> =>
      language
        ? await translate(message, language)
        : "No translation available",
    [language],
  )

  return (
    <div className={styles.Chat}>
      <ChatThread
        translateMessage={translateMessage}
        responses={responses}
        waitingForChatbot={isPending}
      />
      <MessageInput sendMessage={sendUserMessage} disabled={isPending} />
      <div className={styles.Chat__Disclaimer}>
        <GoInfo style={{ minHeight: "15px", minWidth: "15px" }} />
        This chat sends messages to an AI and uses third-party services, do not
        send any personal or private information.
      </div>
    </div>
  )
}
