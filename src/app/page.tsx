import styles from "./page.module.css"

import { Topics } from "@/components/Topics"
import { MainContent } from "@/components/MainContent"
import React from "react"
import { SavedPhrases } from "@/components/SavedPhrases"

export default function Home() {
  return (
    <div className={styles.Home}>
      <Topics />
      <MainContent />
      <SavedPhrases />
    </div>
  )
}
