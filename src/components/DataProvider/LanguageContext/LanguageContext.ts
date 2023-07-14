"use client"

import React from "react"

import { Language } from "@/types"

import { Action } from "../DataStateReducer"

interface LanguageContext {
  language: Language | undefined
  languageCountryCode: string
  setLanguage: (language: Language | undefined) => void
}

export const getCountryCode = (language: Language) => {
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

export const buildLanguageContextValue = (
  currentLang: Language | undefined,
  dispatch: React.Dispatch<Action>,
): LanguageContext => ({
  language: currentLang,
  languageCountryCode: currentLang ? getCountryCode(currentLang) : "",
  setLanguage: (language: Language | undefined) =>
    dispatch({ type: "setLanguage", language }),
})

export const LanguageContext = React.createContext<LanguageContext>({
  language: undefined,
  languageCountryCode: "",
  setLanguage: () => {},
})
