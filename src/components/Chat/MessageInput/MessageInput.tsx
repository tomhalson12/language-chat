// prettier-ignore
"use client"

import styles from "./MessageInput.module.css"

import { LanguageCode } from "@/types"
import React from "react"
import { BiSolidSend } from "react-icons/bi"

type MessageInputProps = {
  languageCode: LanguageCode
  sendMessage: (msg: string) => Promise<void>
}

export const MessageInput = ({
  languageCode,
  sendMessage,
}: MessageInputProps) => {
  const [value, setTextarea] = React.useState("")

  const onSendMessage = React.useCallback(async () => {
    await sendMessage(value)

    setTextarea("")
  }, [sendMessage, value])

  const onEnter = React.useCallback(
    async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && e.shiftKey == false) {
        e.preventDefault()
        onSendMessage()
      }
    },
    [onSendMessage],
  )

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
            onKeyDown={onEnter}
          />
          <span className={styles.MessageInput__HiddenVal}>{value} </span>
        </div>
        <BiSolidSend
          onClick={onSendMessage}
          color={`var(--${languageCode}Color)`}
          size="30px"
        />
      </div>
    </div>
  )
}
