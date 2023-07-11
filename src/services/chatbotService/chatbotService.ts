"use server"

import { ChatResponse, Difficulty, Language } from "@/types"
import {
  Configuration,
  OpenAIApi,
  ChatCompletionRequestMessage,
  CreateChatCompletionResponse,
} from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const MODEL = process.env.OPENAI_MODEL || "none"
const USE_MODEL = process.env.USE_CHAT === "true"

const getPrompt = (
  language: Language,
  difficulty: Difficulty,
  extra?: string,
) =>
  `You are teaching me ${language}, only reply in ${difficulty} level ${language}${extra}`

const performChatCompletion = async (
  initialPrompt: string,
  responses: ChatResponse[],
  messageProcessor?: (
    completion: CreateChatCompletionResponse["choices"],
  ) => string[],
) => {
  let tokensCount = 0
  const chat: ChatCompletionRequestMessage[] = []

  responses.reverse().every((response) =>
    response.messages.reverse().every((message) => {
      tokensCount += message.length / 2

      if (tokensCount > 3500) {
        return false
      }

      chat.push({
        role: response.isUserMessage ? "user" : "assistant",
        content: message,
      })
      return true
    }),
  )

  const completion = await openai.createChatCompletion({
    model: MODEL,
    messages: [
      {
        role: "system",
        content: initialPrompt,
      },
      ...chat.reverse(),
    ],
  })

  return messageProcessor
    ? messageProcessor(completion.data.choices)
    : completion.data.choices.map(
        (choice) => choice.message?.content || "no response",
      )
}

export const sendMessage = async (
  language: Language,
  difficulty: Difficulty,
  responses: ChatResponse[],
): Promise<string[]> =>
  USE_MODEL
    ? performChatCompletion(getPrompt(language, difficulty), responses)
    : ["this is a generic response that is for mocking purposes"]

export const startTopicConversation = async (
  language: Language,
  difficulty: Difficulty,
  topic: string,
) =>
  USE_MODEL
    ? performChatCompletion(
        getPrompt(
          language,
          difficulty,
          `, start having a conversation about ${topic}`,
        ),
        [],
      )
    : [`this is a mocked response, starting a conversation about ${topic}`]

export const getTopics = async (): Promise<string[]> =>
  USE_MODEL
    ? performChatCompletion(
        "give me 5 1 word topics of conversation, only return the words, separate each topic by a two hyphens",
        [],
        (choices) =>
          choices[0].message?.content?.split("--") || ["no response"],
      )
    : ["Football", "Books", "Cooking", "Music", "Clothes"]
