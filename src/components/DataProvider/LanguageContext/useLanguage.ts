import React from "react"

import { LanguageContext } from "./LanguageContext"

export const useLanguage = () => {
  const context = React.useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
