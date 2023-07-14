import React from "react"

import classNames from "classnames"
import { LiaExchangeAltSolid } from "react-icons/lia"

import { Language } from "@/types"

import styles from "./MessageBubble.module.css"

type MessageBubbleProps = {
  message: string
  language?: Language
  isUserMessage: boolean
  onClick: () => void
  deletePhrase: (msg: string) => void
  isSaved: boolean
  translateMsg: (msg: string, language: Language) => Promise<string>
}

export const MessageBubble = ({
  message,
  language,
  onClick,
  deletePhrase,
  isUserMessage,
  isSaved,
  translateMsg,
}: MessageBubbleProps) => {
  const [showOptions, setShowOptions] = React.useState(false)
  const [showTranslation, setShowTranslation] = React.useState(false)
  const [translation, setTranslation] = React.useState<string | undefined>("")

  const iconProps = {
    color: `var(--textColor)`,
    style: { minWidth: "21px", minHeight: "21px", cursor: "pointer" },
  }

  const translate = React.useCallback(async () => {
    if (language && !translation) {
      const translationMsg = await translateMsg(message, language)

      setTranslation(translationMsg)
    }
  }, [language, message, translateMsg, translation])

  const handleOnTranslateClick = React.useCallback(async () => {
    if (!translation) {
      await translate()
    }

    setShowTranslation(!showTranslation)
  }, [showTranslation, translation, translate])

  const handleOnHoverOff = React.useCallback(async () => {
    setShowOptions(false)
    setShowTranslation(false)
  }, [])

  return (
    <div
      className={classNames(styles.MessageBubble, {
        [styles.MessageBubble__User]: isUserMessage,
        [styles.MessageBubble__Chatbot]: !isUserMessage,
      })}
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={handleOnHoverOff}
    >
      <div
        className={classNames(styles.MessageBubble__Bubble, {
          [styles.MessageBubble__lang]: !isUserMessage && language,
        })}
        style={!isUserMessage ? { background: `var(--${language}Color)` } : {}}
      >
        {showTranslation ? translation : message}
      </div>
      {showOptions ? (
        <div className={styles.MessageBubble__Options}>
          <LiaExchangeAltSolid
            onClick={handleOnTranslateClick}
            {...iconProps}
          />
        </div>
      ) : null}
      {/* {isSaved ? (
        <BiSolidSave onClick={() => deletePhrase(message)} {...iconProps} />
      ) : (
        <BiSave onClick={onClick} {...iconProps} />
      )} */}
    </div>
  )
}
