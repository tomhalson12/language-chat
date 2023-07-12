import classNames from "classnames"
import styles from "./MessageBubble.module.css"
import { Language } from "@/types"
import React from "react"
import { BiSolidSave, BiSave } from "react-icons/bi"

type MessageBubbleProps = {
  message: string
  language?: Language
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
          [styles.MessageBubble__lang]: !isUserMessage && language,
        })}
        style={!isUserMessage ? { background: `var(--${language}Color)` } : {}}
      >
        {message}
      </div>
      {/* {isSaved ? (
        <BiSolidSave onClick={() => deletePhrase(message)} {...iconProps} />
      ) : (
        <BiSave onClick={onClick} {...iconProps} />
      )} */}
    </div>
  )
}
