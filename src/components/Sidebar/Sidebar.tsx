import { Difficulties } from "../Difficulties"
import { SavedPhrases } from "../SavedPhrases"
import { Topics } from "../Topics"
import styles from "./Sidebar.module.css"

export const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <Difficulties />
      <Topics />
      <SavedPhrases />
    </div>
  )
}
