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

export type Language = (typeof languages)[number]

export type ChatResponse = {
  isUserMessage: boolean
  messages: string[]
}

export const difficulties = ["beginner", "medium", "advanced"] as const

export type Difficulty = (typeof difficulties)[number]
