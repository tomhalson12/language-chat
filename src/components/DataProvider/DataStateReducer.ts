import { Difficulty, Language } from "@/types"

export interface DataState {
  language: Language | undefined
  selectedTopic: string | undefined
  savedPhrases: string[]
  difficulty: Difficulty
}

interface SetLanguageAction {
  type: "setLanguage"
  language: Language | undefined
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

interface SetDifficulty {
  type: "setDifficulty"
  difficulty: Difficulty
}

export type Action =
  | SetLanguageAction
  | SetTopicAction
  | AddPhraseAction
  | DeletePhraseByIndex
  | DeletePhraseByContent
  | SetDifficulty

const setLanguage = (
  state: DataState,
  language: Language | undefined,
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

const setDifficulty = (
  state: DataState,
  difficulty: Difficulty,
): DataState => ({
  ...state,
  difficulty,
})

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
    case "setDifficulty":
      return setDifficulty(state, action.difficulty)
    default:
      return state
  }
}
