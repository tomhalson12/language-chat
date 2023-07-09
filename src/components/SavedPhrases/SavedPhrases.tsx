import styles from "./SavedPhrases.module.css"

import { SavedPhrase } from "./SavedPhrase/SavedPhrase"
import { SidebarOption } from "../SidebarOption"
import { Icon } from "../Icon"
import React from "react"

interface SavedPhrasesProps {
  phrases: string[]
  deletePhrase: (index: number) => void
}

export const SavedPhrases = ({ phrases, deletePhrase }: SavedPhrasesProps) => {
  const downloadPhrases = React.useCallback(async () => {
    const element = document.createElement("a")
    const file = new Blob(
      phrases.map((phrase) => `${phrase};\n`),
      {
        type: "text/plain;charset=utf-8",
      },
    )
    element.href = URL.createObjectURL(file)
    element.download = "phrases.txt"
    document.body.appendChild(element)
    element.click()
  }, [phrases])

  return (
    <SidebarOption
      title="Saved Phrases"
      description="Download saved phrases to use in anki"
      allowScroll={true}
      icon={<Icon onClick={downloadPhrases} name="export" />}
    >
      <div className={styles.SavedPhrases}>
        {phrases.map((phrase, i) => (
          <SavedPhrase
            onClick={() => deletePhrase(i)}
            key={i}
            phrase={phrase}
          />
        ))}
      </div>
    </SidebarOption>
  )
}
