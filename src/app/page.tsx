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
  const [phrases, setPhrases] = React.useState<string[]>([])

  const addPhrase = React.useCallback(
    (phrase: string) => setPhrases([...phrases, phrase]),
    [phrases],
  )

  const deletePhrase = React.useCallback(
    (index: number) => {
      const newPhrases = [...phrases]
      newPhrases.splice(index, 1)
      setPhrases(newPhrases)
    },
    [phrases],
  )

  const deletePhraseByMessage = React.useCallback((msg: string) => {
    const index = phrases.indexOf(msg)
    deletePhrase(index)
  }, [])

  React.useEffect(() => {
    setTopic(undefined)
  }, [language])

  return (
    <div className={styles.Home}>
      <Topics selectedTopic={topic} setTopic={setTopic} />
      <MainContent
        topic={topic}
        savedPhrases={phrases}
        addPhrase={addPhrase}
        deletePhrase={deletePhraseByMessage}
      />
      <SavedPhrases phrases={phrases} deletePhrase={deletePhrase} />
    </div>
  )
}
