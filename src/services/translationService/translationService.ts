"use server"

import { Translator, TextResult, SourceLanguageCode } from "deepl-node"

import { Language } from "@/types"

export type TranslationData = {
  original: string
  translation: string
}

const translator = new Translator(process.env.DEEPL_API_KEY || "")
const USE_TRANSLATION = process.env.USE_TRANSLATION === "true"

const getLanguageCode = (language: Language): SourceLanguageCode | null => {
  switch (language) {
    case "spanish":
      return "es"
    case "french":
      return "fr"
    case "italian":
      return "it"
    case "german":
      return "de"
    case "portuguese":
      return "pt"
    case "dutch":
      return "nl"
    case "swedish":
      return "sv"
    case "ukrainian":
      return "uk"
    case "turkish":
      return "tr"
    case "japanese":
      return "ja"
    case "korean":
      return "ko"
    case "mandarin":
      return "zh"
    default:
      return null
  }
}

export const translate = async (text: string, language: Language) => {
  if (USE_TRANSLATION) {
    const translation: TextResult = (await translator.translateText(
      text,
      getLanguageCode(language),
      "en-GB",
    )) as TextResult
    return translation.text
  }

  return "No translation available"
}
