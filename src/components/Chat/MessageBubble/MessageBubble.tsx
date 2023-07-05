import classNames from "classnames"
import styles from "./MessageBubble.module.css"
import { LanguageCode } from "@/types"

type MessageBubbleProps = {
  message: string
  language?: LanguageCode
}

export const MessageBubble = ({ message, language }: MessageBubbleProps) => {
  return (
    <div
      className={classNames(styles.MessageBubble, {
        [styles.MessageBubble__lang]: language,
      })}
      style={language ? { background: `var(--${language}Color)` } : {}}
    >
      {message}
    </div>
  )
}
