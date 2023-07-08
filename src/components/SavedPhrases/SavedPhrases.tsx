import styles from "./SavedPhrases.module.css"

import { SavedPhrase } from "./SavedPhrase/SavedPhrase"
import { Sidebar } from "../Sidebar"
import { Icon } from "../Icon"

export const SavedPhrases = () => {
  const savedPhrases = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
      eget dolor porttitor lobortis. Ut nisi mi,`,
    `Ut nisi mi, eleifend non mattis in, dictum
      at risus. Donec at massa faucibus ante ornare porta. Curabitur pulvinar
      nibh congue congue luctus. Nam elementum non nulla et elementum. Nullam
      molestie convallis metus id tristique `,
  ]

  return (
    <Sidebar
      title="Saved Phrases"
      description="Download saved phrases to use in anki"
      dividerSide="left"
      icon={<Icon name="export" />}
    >
      <div className={styles.SavedPhrases}>
        {savedPhrases.map((phrase, i) => (
          <SavedPhrase key={i} phrase={phrase} />
        ))}
      </div>
    </Sidebar>
  )
}
