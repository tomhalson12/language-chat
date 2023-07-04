import styles from "./ChatbotResponse.module.css"

import { LanguageCode } from "@/types"
import { ChatbotAvatar } from "../ChatbotAvatar"
import { MessageBubble } from "../MessageBubble"

type ChatbotResponseProps = {
  languageCode: LanguageCode
  messages: string[]
}

export const ChatbotResponse = ({
  languageCode,
  messages,
}: ChatbotResponseProps) => {
  return (
    <div className={styles.ChatbotResponse}>
      <ChatbotAvatar languageCode={languageCode} />
      <div className={styles.ChatbotResponse__Messages}>
        {messages.map((message, i) => (
          <MessageBubble
            key={i}
            languageCode={languageCode}
            message={message}
          />
        ))}
      </div>
    </div>
  )
}
