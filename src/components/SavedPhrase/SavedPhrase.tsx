import styles from "./SavedPhrase.module.css"

type SavedPhraseProps = {
  phrase: string
}

export const SavedPhrase = ({ phrase }: SavedPhraseProps) => {
  return <div className={styles.SavedPhrase}>{phrase}</div>
}
