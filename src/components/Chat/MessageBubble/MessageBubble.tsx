import classNames from "classnames"
import styles from "./MessageBubble.module.css"
import { LanguageCode } from "@/types"

type MessageBubbleProps = {
  message: string
  languageCode?: LanguageCode
}

export const MessageBubble = ({
  message,
  languageCode,
}: MessageBubbleProps) => {
  return (
    <div
      className={classNames(styles.MessageBubble, {
        [styles.MessageBubble__lang]: languageCode,
      })}
      style={languageCode ? { background: `var(--${languageCode}Color)` } : {}}
    >
      {message}
    </div>
  )
}
