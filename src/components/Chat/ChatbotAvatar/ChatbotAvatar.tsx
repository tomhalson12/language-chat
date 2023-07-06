import styles from "./ChatbotAvatar.module.css"
import React from "react"
import { useLanguage } from "@/components/LanguageProvider"

export const ChatbotAvatar = () => {
  const { language } = useLanguage()

  const name = React.useMemo(() => {
    switch (language) {
      case "spanish":
        return "ES"
      case "french":
        return "FR"
      default:
        return ""
    }
  }, [language])

  return (
    <div
      className={styles.ChatbotAvatar}
      style={language ? { background: `var(--${language}Color)` } : {}}
    >
      {name}
    </div>
  )
}
