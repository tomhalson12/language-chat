import { SavedPhrases } from "../SavedPhrases"
import { Topics } from "../Topics"
import styles from "./Sidebar.module.css"

interface SidebarProps {
  selectedTopic?: string
  setTopic: React.Dispatch<React.SetStateAction<string | undefined>>
  phrases: string[]
  deletePhrase: (index: number) => void
}

export const Sidebar = ({
  selectedTopic,
  setTopic,
  phrases,
  deletePhrase,
}: SidebarProps) => {
  return (
    <div className={styles.Sidebar}>
      <Topics selectedTopic={selectedTopic} setTopic={setTopic} />
      <SavedPhrases phrases={phrases} deletePhrase={deletePhrase} />
    </div>
  )
}
