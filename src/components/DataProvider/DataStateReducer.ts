import { LanguageCode } from "@/types"

export interface DataState {
  language: LanguageCode | undefined
  selectedTopic: string | undefined
  savedPhrases: string[]
}

interface SetLanguageAction {
  type: "setLanguage"
  language: LanguageCode | undefined
}

interface SetTopicAction {
  type: "setTopic"
  topic: string | undefined
}

interface AddPhraseAction {
  type: "addPhrase"
  phrase: string
}

interface DeletePhraseByIndex {
  type: "deletePhraseByIndex"
  index: number
}

interface DeletePhraseByContent {
  type: "deletePhraseByContent"
  phrase: string
}

export type Action =
  | SetLanguageAction
  | SetTopicAction
  | AddPhraseAction
  | DeletePhraseByIndex
  | DeletePhraseByContent

const setLanguage = (
  state: DataState,
  language: LanguageCode | undefined,
): DataState => ({
  ...state,
  language,
  selectedTopic: undefined,
})

const setTopic = (state: DataState, topic: string | undefined): DataState => ({
  ...state,
  selectedTopic: topic,
})

const addPhrase = (state: DataState, phrase: string): DataState => ({
  ...state,
  savedPhrases: [...state.savedPhrases, phrase],
})

const deletePhraseByIndex = (state: DataState, index: number): DataState => {
  if (index === -1) {
    return state
  }

  const newPhrases = [...state.savedPhrases]
  newPhrases.splice(index, 1)

  return {
    ...state,
    savedPhrases: newPhrases,
  }
}

const deletePhraseByContent = (state: DataState, phrase: string): DataState => {
  const index = state.savedPhrases.indexOf(phrase)
  return deletePhraseByIndex(state, index)
}

export const dataStateReducer = (
  state: DataState,
  action: Action,
): DataState => {
  switch (action.type) {
    case "setLanguage":
      return setLanguage(state, action.language)
    case "setTopic":
      return setTopic(state, action.topic)
    case "addPhrase":
      return addPhrase(state, action.phrase)
    case "deletePhraseByIndex":
      return deletePhraseByIndex(state, action.index)
    case "deletePhraseByContent":
      return deletePhraseByContent(state, action.phrase)
    default:
      return state
  }
}
