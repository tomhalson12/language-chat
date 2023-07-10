import { SavedPhrases } from "../SavedPhrases"
import { Topics } from "../Topics"
import styles from "./Sidebar.module.css"

export const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <Topics />
      <SavedPhrases />
    </div>
  )
}
