"use client"

import { IoIosRefresh } from "react-icons/io"
import { useLanguage } from "../LanguageProvider"
import { GoDownload } from "react-icons/go"
import React from "react"

interface IconProps {
  name: "refresh" | "export"
  className?: string
  onClick?: () => Promise<void>
}

export const Icon = ({ name, className, onClick }: IconProps) => {
  const { language } = useLanguage()

  const style = onClick !== undefined ? { cursor: "pointer" } : {}

  const icon = React.useMemo(() => {
    switch (name) {
      case "refresh":
        return <IoIosRefresh color={`var(--${language}Color)`} size="30px" />
      case "export":
        return <GoDownload color={`var(--${language}Color)`} size="30px" />
      default:
        return <>X</>
    }
  }, [])

  return (
    <span style={style} className={className} onClick={onClick}>
      {icon}
    </span>
  )
}
