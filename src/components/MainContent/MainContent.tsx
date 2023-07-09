import { Chat } from "../Chat"
import { LanguageDisplay } from "../LanguageDisplay"
import styles from "./MainContent.module.css"

interface MainContentProps {
  topic?: string
  savedPhrases: string[]
  addPhrase: (phrase: string) => void
  deletePhrase: (phrase: string) => void
}

export const MainContent = ({
  topic,
  savedPhrases,
  addPhrase,
  deletePhrase,
}: MainContentProps) => {
  return (
    <div className={styles.MainContent}>
      <LanguageDisplay />
      <Chat
        savedPhrases={savedPhrases}
        topic={topic}
        addPhrase={addPhrase}
        deletePhrase={deletePhrase}
      />
    </div>
  )
}
