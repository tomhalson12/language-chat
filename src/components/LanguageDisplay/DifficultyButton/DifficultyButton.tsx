import styles from "./DifficultyButton.module.css"

type DifficultyButtonProps = {
  difficulty: "beginner" | "medium" | "advanced"
}

export const DifficultyButton = ({ difficulty }: DifficultyButtonProps) => {
  return <div className={styles.DifficultyButton}>{difficulty}</div>
}
