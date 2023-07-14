import classNames from "classnames"

import { Difficulty, Language } from "@/types"

import styles from "./DifficultyOption.module.css"


interface DifficultyProps {
  language: Language | undefined
  difficulty: Difficulty
  isSelected: boolean
  setDifficulty: (difficulty: Difficulty) => void
}

export const DifficultyOption = ({
  language,
  difficulty,
  isSelected,
  setDifficulty,
}: DifficultyProps) => (
  <div
    className={classNames(styles.DifficultyOption, {
      [styles.DifficultyOption__Selected]: isSelected,
    })}
    style={isSelected ? { background: `var(--${language}Color)` } : {}}
    onClick={() => setDifficulty(difficulty)}
  >
    {difficulty}
  </div>
)
