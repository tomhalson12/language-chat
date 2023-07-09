"use client"
import styles from "./Topics.module.css"

import React from "react"
import { Topic } from "./Topic"
import { getTopics } from "@/services/chatbotService"
import { Icon } from "../Icon"
import { Sidebar } from "../Sidebar"
import { useLanguage } from "../LanguageProvider"

interface TopicsProps {
  selectedTopic?: string
  setTopic: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const Topics = ({ selectedTopic, setTopic }: TopicsProps) => {
  const { language } = useLanguage()
  const [topics, setTopics] = React.useState<string[]>([])
  const [iconSpin, setIconSpin] = React.useState(false)

  const refreshTopics = React.useCallback(async () => {
    setIconSpin(true)
    const newTopics = await getTopics()

    setTopic(undefined)
    setTopics(newTopics)
    setTimeout(() => {
      setIconSpin(false)
    }, 1000)
  }, [])

  React.useEffect(() => {
    if (topics.length === 0 && language) {
      refreshTopics()
    }
  }, [language, topics])

  return (
    <Sidebar
      title="Topics"
      description="Start a conversation about..."
      dividerSide="right"
      icon={
        <Icon
          className={iconSpin ? styles.Topics__RefreshIconSpin : ""}
          onClick={refreshTopics}
          name="refresh"
        />
      }
    >
      <div className={styles.Topics}>
        {topics.map((topic, i) => (
          <Topic
            onClick={() => setTopic(topic)}
            key={i}
            title={topic}
            selected={selectedTopic === topic}
          />
        ))}
      </div>
    </Sidebar>
  )
}
