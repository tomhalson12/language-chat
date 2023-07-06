import styles from "./ChatbotResponse.module.css"

import { ChatbotAvatar } from "../ChatbotAvatar"
import { MessageBubble } from "../MessageBubble"
import { useLanguage } from "@/components/LanguageProvider"

type ChatbotResponseProps = {
  messages: string[]
}

export const ChatbotResponse = ({ messages }: ChatbotResponseProps) => {
  const { language } = useLanguage()

  return (
    <div className={styles.ChatbotResponse}>
      <ChatbotAvatar />
      <div className={styles.ChatbotResponse__Messages}>
        {messages.map((message, i) => (
          <MessageBubble language={language} key={i} message={message} />
        ))}
      </div>
    </div>
  )
}
