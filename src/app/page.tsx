"use client"

import styles from "./page.module.css"

import { Topics } from "@/components/Topics"
import { MainContent } from "@/components/MainContent"
import React from "react"
import { SavedPhrases } from "@/components/SavedPhrases"
import { useLanguage } from "@/components/LanguageProvider"

export default function Home() {
  const { language } = useLanguage()
  const [topic, setTopic] = React.useState<string | undefined>()

  React.useEffect(() => {
    setTopic(undefined)
  }, [language])

  return (
    <div className={styles.Home}>
      <Topics selectedTopic={topic} setTopic={setTopic} />
      <MainContent topic={topic} />
      <SavedPhrases />
    </div>
  )
}
