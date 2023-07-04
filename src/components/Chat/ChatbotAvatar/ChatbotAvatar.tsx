import { LanguageCode } from "@/types"
import styles from "./ChatbotAvatar.module.css"
import React from "react"

type ChatbotAvatarProps = {
  languageCode: LanguageCode
}

export const ChatbotAvatar = ({ languageCode }: ChatbotAvatarProps) => {
  const name = React.useMemo(() => {
    switch (languageCode) {
      case "spanish":
        return "ES"
      case "french":
        return "FR"
      default:
        return ""
    }
  }, [languageCode])

  return (
    <div
      className={styles.ChatbotAvatar}
      style={languageCode ? { background: `var(--${languageCode}Color)` } : {}}
    >
      {name}
    </div>
  )
}
