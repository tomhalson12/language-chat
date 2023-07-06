"use client"

import { IoIosRefresh } from "react-icons/io"
import { useLanguage } from "../LanguageProvider"
import { GoDownload } from "react-icons/go"

interface IconProps {
  name: "refresh" | "export"
}

export const Icon = ({ name }: IconProps) => {
  const { language } = useLanguage()

  switch (name) {
    case "refresh":
      return <IoIosRefresh color={`var(--${language}Color)`} size="30px" />
    case "export":
      return <GoDownload color={`var(--${language}Color)`} size="30px" />
    default:
      return <>X</>
  }
}
