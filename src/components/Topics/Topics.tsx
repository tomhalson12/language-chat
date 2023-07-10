"use client"
import styles from "./Topics.module.css"

import React from "react"
import { Topic } from "./Topic"
import { getTopics } from "@/services/chatbotService"
import { Icon } from "../Icon"
import { SidebarOption } from "../SidebarOption"
import { useLanguage, useTopic } from "../DataProvider"

export const Topics = () => {
  const { selectedTopic, setTopic } = useTopic()
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
    <SidebarOption
      title="Topics"
      description="Start a conversation about..."
      allowScroll={false}
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
    </SidebarOption>
  )
}
