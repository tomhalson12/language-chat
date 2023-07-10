import styles from "./ChatbotResponse.module.css"

import { ChatbotAvatar } from "../ChatbotAvatar"
import { MessageBubble } from "../MessageBubble"
import { useLanguage } from "@/components/DataProvider"

type ChatbotResponseProps = {
  messages: string[]
  savedPhrases: string[]
  addPhrase: (phrase: string) => void
  deletePhrase: (phrase: string) => void
}

export const ChatbotResponse = ({
  messages,
  savedPhrases,
  addPhrase,
  deletePhrase,
}: ChatbotResponseProps) => {
  const { language } = useLanguage()

  return (
    <div className={styles.ChatbotResponse}>
      <ChatbotAvatar />
      <div className={styles.ChatbotResponse__Messages}>
        {messages.map((message, i) => (
          <MessageBubble
            isUserMessage={false}
            isSaved={savedPhrases.includes(message)}
            onClick={() => addPhrase(message)}
            deletePhrase={deletePhrase}
            language={language}
            key={i}
            message={message}
          />
        ))}
      </div>
    </div>
  )
}
