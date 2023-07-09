import styles from "./SavedPhrase.module.css"

import { RxCross2 } from "react-icons/rx"

type SavedPhraseProps = {
  phrase: string
  onClick: () => void
}

export const SavedPhrase = ({ phrase, onClick }: SavedPhraseProps) => {
  return (
    <div className={styles.SavedPhrase__Container}>
      <div className={styles.SavedPhrase}>{phrase}</div>
      <RxCross2 style={{ cursor: "pointer" }} onClick={onClick} />
    </div>
  )
}
