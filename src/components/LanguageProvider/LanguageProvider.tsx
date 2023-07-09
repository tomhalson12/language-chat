//prettier-ignore
"use client"

import { LanguageCode } from "@/types"
import React, { ReactNode } from "react"

export const LanguageContext = React.createContext<LanguageContext>({
  language: undefined,
  languageCountryCode: "",
  setLanguage: () => {},
})

interface LanguageContext {
  language: LanguageCode | undefined
  languageCountryCode: string
  setLanguage: React.Dispatch<React.SetStateAction<LanguageCode | undefined>>
}

interface LanguageProviderProps {
  children: ReactNode
}

export const getCountryCode = (language: LanguageCode) => {
  switch (language) {
    case "spanish":
      return "ES"
    case "french":
      return "FR"
    case "italian":
      return "IT"
    case "german":
      return "DE"
    case "portuguese":
      return "PT"
    case "dutch":
      return "NL"
    case "swedish":
      return "SE"
    case "ukrainian":
      return "UA"
    case "turkish":
      return "TR"
    case "japanese":
      return "JP"
    case "korean":
      return "KR"
    case "mandarin":
      return "CN"
    default:
      return ""
  }
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = React.useState<LanguageCode | undefined>(
    undefined,
  )

  const countryCode = React.useMemo(
    () => (language ? getCountryCode(language) : ""),
    [language],
  )

  const contextValue = React.useMemo(
    () => ({
      language,
      languageCountryCode: countryCode,
      setLanguage,
    }),
    [language, setLanguage],
  )

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}
