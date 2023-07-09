import classNames from "classnames"
import styles from "./MessageBubble.module.css"
import { LanguageCode } from "@/types"
import React from "react"

import { AiFillStar, AiOutlineStar } from "react-icons/ai"

type MessageBubbleProps = {
  message: string
  language: LanguageCode
  isUserMessage: boolean
  onClick: () => void
  deletePhrase: (msg: string) => void
  isSaved: boolean
}

export const MessageBubble = ({
  message,
  language,
  onClick,
  deletePhrase,
  isUserMessage,
  isSaved,
}: MessageBubbleProps) => {
  const iconProps = {
    color: `var(--${language}Color)`,
    style: { minWidth: "20px", minHeight: "20px", cursor: "pointer" },
  }

  return (
    <div className={styles.MessageBubble}>
      <div
        className={classNames(styles.MessageBubble__Bubble, {
          [styles.MessageBubble__lang]: !isUserMessage,
        })}
        style={!isUserMessage ? { background: `var(--${language}Color)` } : {}}
      >
        {message}
      </div>
      {isSaved ? (
        <AiFillStar onClick={() => deletePhrase(message)} {...iconProps} />
      ) : (
        <AiOutlineStar onClick={onClick} {...iconProps} />
      )}
    </div>
  )
}
