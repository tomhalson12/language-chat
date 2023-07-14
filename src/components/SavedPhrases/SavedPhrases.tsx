import React from "react"

import { SavedPhrase } from "./SavedPhrase/SavedPhrase"
import styles from "./SavedPhrases.module.css"
import { useSavedPhrases } from "../DataProvider"
import { SidebarOption } from "../Sidebar"

export const SavedPhrases = () => {
  const { savedPhrases: phrases, deletePhraseByIndex } = useSavedPhrases()

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
      collapsible={true}
      iconName="export"
      iconOnClick={downloadPhrases}
    >
      <div className={styles.SavedPhrases}>
        {phrases.map((phrase, i) => (
          <SavedPhrase
            onClick={() => deletePhraseByIndex(i)}
            key={i}
            phrase={phrase}
          />
        ))}
      </div>
    </SidebarOption>
  )
}
