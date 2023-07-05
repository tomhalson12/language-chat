import styles from "./LanguageDisplay.module.css"

import ReactCountryFlag from "react-country-flag"
import { LiaExchangeAltSolid } from "react-icons/lia"
import React from "react"
import { useLanguage } from "../LanguageProvider"

export const LanguageDisplay = () => {
  const { language, setLanguage } = useLanguage()

  const countryCode = React.useMemo(() => {
    switch (language) {
      case "spanish":
        return "ES"
      case "french":
        return "FR"
      default:
        return ""
    }
  }, [language])

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
          if (language === "spanish") {
            setLanguage("french")
          } else {
            setLanguage("spanish")
          }
        }}
        color={`var(--${language}Color)`}
        size={30}
      />
    </div>
  )
}
