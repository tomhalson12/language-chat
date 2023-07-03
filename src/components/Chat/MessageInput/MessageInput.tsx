// prettier-ignore
"use client"

import styles from "./MessageInput.module.css"

import { LanguageCode } from "@/types"
import React from "react"
import { BiSolidSend } from "react-icons/bi"

type MessageInputProps = {
  languageCode: LanguageCode
}

export const MessageInput = ({ languageCode }: MessageInputProps) => {
  const [value, setTextarea] = React.useState("")
  return (
    <div className={styles.MessageInput}>
      <div className={styles.MessageInput__Wrapper}>
        <div className={styles.MessageInput__stretch}>
          <textarea
            placeholder="Send a message..."
            className={styles.MessageInput__Input}
            rows={1}
            value={value}
            onChange={(event) => setTextarea(event.target.value)}
          />
          <span className={styles.MessageInput__HiddenVal}>{value} </span>
        </div>
        <BiSolidSend color={`var(--${languageCode}Color)`} size="30px" />
      </div>
    </div>
  )
}
