import styles from "./Topics.module.css"

import { Topic } from "./Topic"
import { Sidebar } from "../Sidebar"
import { Icon } from "../Icon"

export const Topics = async () => {
  const topics = ["Football", "Books", "Cooking", "Weather"]

  return (
    <Sidebar
      title="Topics"
      description="Start a conversation about..."
      dividerSide="right"
      icon={<Icon name="refresh" />}
    >
      <div className={styles.Topics}>
        {topics.map((topic, i) => (
          <Topic key={i} title={topic} />
        ))}
      </div>
    </Sidebar>
  )
}
