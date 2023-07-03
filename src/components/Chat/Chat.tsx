import { ChatResponse, LanguageCode } from "@/types"
import styles from "./Chat.module.css"
import { ChatThread } from "./ChatThread"
import { MessageInput } from "./MessageInput"

type ChatProps = {
  languageCode: LanguageCode
}

export const Chat = ({ languageCode }: ChatProps) => {
  const responses: ChatResponse[] = [
    {
      isUserMessage: false,
      messages: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
      eget dolor porttitor lobortis. Ut nisi mi, eleifend non mattis in, dictum
      at risus. Donec at massa faucibus ante ornare porta. Curabitur pulvinar
      nibh congue congue luctus. Nam elementum non nulla et elementum. Nullam
      molestie convallis metus id tristique.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
      eget dolor porttitor lobortis. Ut nisi mi, eleifend non mattis in, dictum
      at risus.`,
      ],
    },
    {
      isUserMessage: true,
      messages: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
      eget dolor porttitor lobortis. Ut nisi mi, eleifend non mattis in, dictum
      at risus.`,
      ],
    },
    {
      isUserMessage: false,
      messages: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
      eget dolor porttitor lobortis. Ut nisi mi, eleifend non mattis in, dictum
      at risus. Donec at massa faucibus ante ornare porta.`,
      ],
    },
    {
      isUserMessage: true,
      messages: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
      eget dolor porttitor lobortis. Ut nisi mi, eleifend non mattis in, dictum
      at risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
      eget dolor porttitor lobortis. Ut nisi mi, eleifend non mattis in, dictum
      at risus.`,
      ],
    },
    {
      isUserMessage: false,
      messages: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
      eget dolor porttitor lobortis. Ut nisi mi, eleifend non mattis in, dictum
      at risus. Donec at massa faucibus ante ornare porta. Curabitur pulvinar
      nibh congue congue luctus. Nam elementum non nulla et elementum. Nullam
      molestie convallis metus id tristique.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
      eget dolor porttitor lobortis. Ut nisi mi, eleifend non mattis in, dictum
      at risus.`,
      ],
    },
    {
      isUserMessage: true,
      messages: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
      eget dolor porttitor lobortis. Ut nisi mi, eleifend non mattis in, dictum
      at risus.`,
      ],
    },
    {
      isUserMessage: false,
      messages: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
      eget dolor porttitor lobortis. Ut nisi mi, eleifend non mattis in, dictum
      at risus. Donec at massa faucibus ante ornare porta.`,
      ],
    },
    {
      isUserMessage: true,
      messages: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
      eget dolor porttitor lobortis. Ut nisi mi, eleifend non mattis in, dictum
      at risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
      eget dolor porttitor lobortis. Ut nisi mi, eleifend non mattis in, dictum
      at risus.`,
      ],
    },
  ]

  return (
    <div className={styles.Chat}>
      <ChatThread languageCode={languageCode} responses={responses} />
      <MessageInput languageCode="spanish" />
    </div>
  )
}
