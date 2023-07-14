import React from "react"

import { useLanguage } from "@/components/DataProvider"

import styles from "./ChatbotAvatar.module.css"

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
