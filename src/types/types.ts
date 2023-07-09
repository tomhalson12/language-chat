export const languages = [
  "spanish",
  "french",
  "italian",
  "german",
  "portuguese",
  "dutch",
  "swedish",
  "ukrainian",
  "turkish",
  "japanese",
  "korean",
  "mandarin",
] as const

export type LanguageCode = (typeof languages)[number]

export type ChatResponse = {
  isUserMessage: boolean
  messages: string[]
}
