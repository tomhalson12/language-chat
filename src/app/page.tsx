// prettier-ignore
"use client"

import styles from "./page.module.css"

import {
  Sidebar,
  Topic,
  SavedPhrase,
  LanguageDisplay,
  Chat,
  useLanguage,
} from "@/components"
import { IoIosRefresh } from "react-icons/io"
import { GoDownload } from "react-icons/go"
import React from "react"

export default function Home() {
  const { language } = useLanguage()

  const savedPhrases = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
  eget dolor porttitor lobortis. Ut nisi mi,`,
    `Ut nisi mi, eleifend non mattis in, dictum
  at risus. Donec at massa faucibus ante ornare porta. Curabitur pulvinar
  nibh congue congue luctus. Nam elementum non nulla et elementum. Nullam
  molestie convallis metus id tristique `,
  ]

  const topics = ["Football", "Books", "Cooking", "Weather"]

  return (
    <div className={styles.Home}>
      <Sidebar
        title="Saved Phrases"
        description="Start a conversation about..."
        dividerSide="right"
        icon={<IoIosRefresh color={`var(--${language}Color)`} size="30px" />}
      >
        <div className={styles.Home__Sidebar}>
          {topics.map((topic, i) => (
            <Topic key={i} title={topic} />
          ))}
        </div>
      </Sidebar>

      <div className={styles.Home__Body}>
        <LanguageDisplay />
        <Chat />
      </div>

      <Sidebar
        title="Saved Phrases"
        description="Download saved phrases to use in anki"
        dividerSide="left"
        icon={<GoDownload color={`var(--${language}Color)`} size="30px" />}
      >
        <div className={styles.Home__Sidebar}>
          {savedPhrases.map((phrase, i) => (
            <SavedPhrase key={i} phrase={phrase} />
          ))}
        </div>
      </Sidebar>
    </div>
  )
}
