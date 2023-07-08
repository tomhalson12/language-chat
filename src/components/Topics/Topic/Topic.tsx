"use client"

import { BsArrowRight } from "react-icons/bs"

import styles from "./Topic.module.css"
import classNames from "classnames"
import { useLanguage } from "@/components/LanguageProvider"
import React from "react"

type TopicProps = {
  title: string
  selected: boolean
  onClick: () => void
}

export const Topic = ({ title, selected, onClick }: TopicProps) => {
  const { language } = useLanguage()

  const selectedStyle = React.useMemo(() => {
    return selected ? { backgroundColor: `var(--${language}Color)` } : {}
  }, [selected, language])

  return (
    <div
      onClick={onClick}
      style={selectedStyle}
      className={classNames(styles.Topic, {
        [styles.Topic__selected]: selected,
      })}
    >
      {title}
      {selected ? <BsArrowRight /> : null}
    </div>
  )
}
