import styles from "./page.module.css"

import {
  Sidebar,
  Topic,
  SavedPhrase,
  LanguageDisplay,
  Chat,
} from "@/components"
import { IoIosRefresh } from "react-icons/io"
import { GoDownload } from "react-icons/go"

export default function Home() {
  const savedPhrases = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
  eget dolor porttitor lobortis. Ut nisi mi,`,
    `Ut nisi mi, eleifend non mattis in, dictum
  at risus. Donec at massa faucibus ante ornare porta. Curabitur pulvinar
  nibh congue congue luctus. Nam elementum non nulla et elementum. Nullam
  molestie convallis metus id tristique `,
  ]

  const topics = ["Football", "Books", "Cooking", "Weather"]

  const langCode = "spanish"

  return (
    <div className={styles.Home}>
      <Sidebar
        title="Saved Phrases"
        description="Start a conversation about..."
        dividerSide="right"
        icon={<IoIosRefresh color={`var(--${langCode}Color)`} size="30px" />}
      >
        <div className={styles.Home__Sidebar}>
          {topics.map((topic) => (
            <Topic title={topic} />
          ))}
        </div>
      </Sidebar>

      <div className={styles.Home__Body}>
        <LanguageDisplay languageCode="spanish" />
        <Chat languageCode={langCode} />
      </div>

      <Sidebar
        title="Saved Phrases"
        description="Download saved phrases to use in anki"
        dividerSide="left"
        icon={<GoDownload color={`var(--${langCode}Color)`} size="30px" />}
      >
        <div className={styles.Home__Sidebar}>
          {savedPhrases.map((phrase) => (
            <SavedPhrase phrase={phrase} />
          ))}
        </div>
      </Sidebar>
    </div>
  )
}
