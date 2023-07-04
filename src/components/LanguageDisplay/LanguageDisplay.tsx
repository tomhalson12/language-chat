import styles from "./LanguageDisplay.module.css"

import ReactCountryFlag from "react-country-flag"
import { LiaExchangeAltSolid } from "react-icons/lia"
import { LanguageCode } from "@/types"
import React from "react"

type LanguageDisplayProps = {
  languageCode: LanguageCode
  setLanguage: React.Dispatch<React.SetStateAction<LanguageCode>>
}

export const LanguageDisplay = ({
  languageCode,
  setLanguage,
}: LanguageDisplayProps) => {
  const countryCode = React.useMemo(() => {
    switch (languageCode) {
      case "spanish":
        return "ES"
      case "french":
        return "FR"
      default:
        return ""
    }
  }, [languageCode])

  return (
    <div className={styles.LanguageDisplay}>
      <span className={styles.LanguageDisplay__Title}>Language Chat</span>
      <ReactCountryFlag
        className={styles.LanguageDisplay__Flag}
        countryCode={countryCode}
        svg={true}
      />
      <LiaExchangeAltSolid
        style={{ cursor: "pointer" }}
        onClick={() => {
          // TODO: make this selectable
          if (languageCode === "spanish") {
            setLanguage("french")
          } else {
            setLanguage("spanish")
          }
        }}
        color={`var(--${languageCode}Color)`}
        size={30}
      />
    </div>
  )
}
