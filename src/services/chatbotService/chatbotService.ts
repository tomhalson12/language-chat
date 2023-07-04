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

    console.log(completion)
    // TODO: handle multiple bot responses
    // TODO: handle tokens
    return [completion.data.choices[0].message?.content || "no response"]
  }

  return ["this is a generic response that is for mocking purposes"]
}