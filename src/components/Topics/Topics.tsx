"use client"

import React from "react"

import { getTopics } from "@/services/chatbotService"

import { Topic } from "./Topic"
import styles from "./Topics.module.css"
import { useLanguage, useTopic } from "../DataProvider"
import { SidebarOption } from "../Sidebar"

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
  }, [setTopic])
  4
  React.useEffect(() => {
    if (topics.length === 0 && language) {
      refreshTopics()
    }
  }, [language, refreshTopics, topics])

  return (
    <SidebarOption
      title="Topics"
      description="Start a conversation about..."
      allowScroll={false}
      collapsible={false}
      iconName="refresh"
      iconClassName={iconSpin ? styles.Topics__RefreshIconSpin : ""}
      iconOnClick={refreshTopics}
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
