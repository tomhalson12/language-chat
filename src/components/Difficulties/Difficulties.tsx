import React from "react"

import { difficulties } from "@/types"

import styles from "./Difficulties.module.css"
import { DifficultyOption } from "./DifficultyOption"
import { useDifficulty, useLanguage } from "../DataProvider"

export const Difficulties = () => {
  const { difficulty: currentDifficulty, setDifficulty } = useDifficulty()
  const { language } = useLanguage()

  const difficultiesList = React.useMemo(
    () =>
      difficulties.map((difficulty, i) => (
        <DifficultyOption
          key={i}
          language={language}
          difficulty={difficulty}
          isSelected={difficulty === currentDifficulty}
          setDifficulty={setDifficulty}
        />
      )),
    [currentDifficulty, language, setDifficulty],
  )

  return <div className={styles.Difficulties}>{difficultiesList}</div>
}
