import styles from "./ChatbotAvatar.module.css"
import React from "react"
import { useLanguage } from "@/components/LanguageProvider"

export const ChatbotAvatar = () => {
  const { language, languageCountryCode } = useLanguage()

  return (
    <div
      className={styles.ChatbotAvatar}
      style={language ? { background: `var(--${language}Color)` } : {}}
    >
      {languageCountryCode}
    </div>
  )
}
