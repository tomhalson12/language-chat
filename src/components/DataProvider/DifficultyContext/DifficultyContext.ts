"use client"

import React from "react"

import { Difficulty } from "@/types"

import { Action } from "../DataStateReducer"

interface DifficultyContext {
  difficulty: Difficulty
  setDifficulty: (difficulty: Difficulty) => void
}

export const buildDifficultyContextValue = (
  currentDifficulty: Difficulty,
  dispatch: React.Dispatch<Action>,
): DifficultyContext => ({
  difficulty: currentDifficulty,
  setDifficulty: (difficulty: Difficulty) =>
    dispatch({ type: "setDifficulty", difficulty }),
})

export const DifficultyContext = React.createContext<DifficultyContext>({
  difficulty: "beginner",
  setDifficulty: () => {},
})
