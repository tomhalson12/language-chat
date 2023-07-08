import { Chat } from "../Chat"
import { LanguageDisplay } from "../LanguageDisplay"
import styles from "./MainContent.module.css"

interface MainContentProps {
  topic?: string
}

export const MainContent = ({ topic }: MainContentProps) => {
  return (
    <div className={styles.MainContent}>
      <LanguageDisplay />
      <Chat topic={topic} />
    </div>
  )
}
