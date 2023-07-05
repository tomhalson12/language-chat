import React from "react"
import { LanguageContext } from "./LanguageProvider"

export const useLanguage = () => {
  const context = React.useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider")
  }
  return context
}
