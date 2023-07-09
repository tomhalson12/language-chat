"use server"

import { ChatResponse, LanguageCode } from "@/types"
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export const sendMessage = async (
  languageCode: LanguageCode,
  responses: ChatResponse[],
): Promise<string[]> => {
  const chat: ChatCompletionRequestMessage[] = responses.reduce(
    (acc: ChatCompletionRequestMessage[], response: ChatResponse) => {
      response.messages.forEach((message) => {
        acc.push({
          role: response.isUserMessage ? "user" : "assistant",
          content: message,
        })
      })

      return acc
    },
    [],
  )

  if (process.env.USE_CHAT === "true") {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are teaching me ${languageCode}, only reply in beginner level ${languageCode}`,
        },
        ...chat,
      ],
    })

    // TODO: handle multiple bot responses
    // TODO: handle tokens
    return [completion.data.choices[0].message?.content || "no response"]
  }

  return ["this is a generic response that is for mocking purposes"]
}

export const startTopicConversation = async (
  languageCode: LanguageCode,
  topic: string,
) => {
  if (process.env.USE_CHAT === "true") {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are teaching me ${languageCode}, only reply in beginner level ${languageCode}, start having a conversation about ${topic}`,
        },
      ],
    })

    // TODO: handle multiple bot responses
    // TODO: handle tokens
    return [completion.data.choices[0].message?.content || "no response"]
  }

  return [`starting a conversation about ${topic}`]
}

export const getTopics = async (): Promise<string[]> => {
  if (process.env.USE_CHAT === "true") {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `give me 5 1 word topics of conversation, only return the words, separate each topic by a two hyphens`,
        },
      ],
    })

    // TODO: handle multiple bot responses
    // TODO: handle tokens
    return (
      completion.data.choices[0].message?.content?.split("--") || [
        "no response",
      ]
    )
  }

  return ["Football", "Books", "Cooking", "Music", "Clothes"]
}
