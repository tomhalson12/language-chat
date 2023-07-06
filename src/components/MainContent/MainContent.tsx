import { Chat } from "../Chat"
import { LanguageDisplay } from "../LanguageDisplay"
import styles from "./MainContent.module.css"

export const MainContent = () => {
  return (
    <div className={styles.MainContent}>
      <LanguageDisplay />
      <Chat />
    </div>
  )
}
