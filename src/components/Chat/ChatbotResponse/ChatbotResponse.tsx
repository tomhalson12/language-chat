import { useLanguage } from "@/components/DataProvider"
import { Language } from "@/types"

import styles from "./ChatbotResponse.module.css"
import { ChatbotAvatar } from "../ChatbotAvatar"
import { MessageBubble } from "../MessageBubble"

type ChatbotResponseProps = {
  messages: string[]
  savedPhrases: string[]
  addPhrase: (phrase: string) => void
  deletePhrase: (phrase: string) => void
  translateMsg: (msg: string, language: Language) => Promise<string>
}

export const ChatbotResponse = ({
  messages,
  savedPhrases,
  addPhrase,
  deletePhrase,
  translateMsg,
}: ChatbotResponseProps) => {
  const { language } = useLanguage()

  return (
    <div className={styles.ChatbotResponse}>
      <ChatbotAvatar />
      <div className={styles.ChatbotResponse__Messages}>
        {messages.map((message, i) => (
          <MessageBubble
            isUserMessage={false}
            translateMsg={translateMsg}
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
