import styles from "./Difficulties.module.css"

import { useDifficulty, useLanguage } from "../DataProvider"
import React from "react"
import { difficulties } from "@/types"
import classNames from "classnames"

export const Difficulties = () => {
  const { difficulty: currentDifficulty, setDifficulty } = useDifficulty()
  const { language } = useLanguage()

  const difficultiesList = React.useMemo(
    () =>
      difficulties.map((difficulty, i) => (
        <div
          key={i}
          className={classNames(styles.Difficulties__Option, {
            [styles.Difficulties__OptionSelected]:
              currentDifficulty === difficulty,
          })}
          style={
            currentDifficulty === difficulty
              ? { background: `var(--${language}Color)` }
              : {}
          }
          onClick={() => setDifficulty(difficulty)}
        >
          {difficulty}
        </div>
      )),
    [currentDifficulty, setDifficulty, language],
  )

  return <div className={styles.Difficulties}>{difficultiesList}</div>
}
