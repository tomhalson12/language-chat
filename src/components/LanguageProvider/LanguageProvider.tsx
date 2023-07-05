//prettier-ignore
"use client"

import { LanguageCode } from "@/types"
import React, { ReactNode } from "react"

export const LanguageContext = React.createContext<LanguageContext>({
  language: "spanish",
  setLanguage: () => {},
})

interface LanguageContext {
  language: LanguageCode
  setLanguage: React.Dispatch<React.SetStateAction<LanguageCode>>
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = React.useState<LanguageCode>("spanish")

  const contextValue = React.useMemo(
    () => ({
      language,
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
