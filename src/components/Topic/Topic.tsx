import { BsArrowRight } from "react-icons/bs"

import styles from "./Topic.module.css"

type TopicProps = {
  title: string
}

export const Topic = ({ title }: TopicProps) => {
  return (
    <div className={styles.Topic}>
      {title}
      <BsArrowRight />
    </div>
  )
}
