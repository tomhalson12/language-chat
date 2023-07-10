// prettier-ignore
"use client"

import { useLanguage } from "@/components/DataProvider"
import styles from "./MessageInput.module.css"

import React, { useRef } from "react"
import { BiSolidSend } from "react-icons/bi"

type MessageInputProps = {
  sendMessage: (msg: string) => Promise<void>
  disabled: boolean
}

export const MessageInput = ({ sendMessage, disabled }: MessageInputProps) => {
  const { language } = useLanguage()
  const [value, setTextarea] = React.useState("")

  const onSendMessage = React.useCallback(async () => {
    if (value === "") {
      return
    }

    await sendMessage(value)

    setTextarea("")
  }, [sendMessage, value])

  const onEnter = React.useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && e.shiftKey == false) {
        e.preventDefault()
        onSendMessage()
      }
    },
    [onSendMessage],
  )

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

  return (
    <div
      className={styles.MessageInput}
      onClick={() => textAreaRef.current?.focus()}
    >
      <div className={styles.MessageInput__Wrapper}>
        <div className={styles.MessageInput__stretch}>
          <textarea
            disabled={disabled}
            ref={textAreaRef}
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
          style={{ cursor: "pointer" }}
          onClick={onSendMessage}
          color={`var(--${language}Color)`}
          size="30px"
        />
      </div>
    </div>
  )
}
