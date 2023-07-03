import styles from "./LanguageDisplay.module.css"

import ReactCountryFlag from "react-country-flag"
import { LiaExchangeAltSolid } from "react-icons/lia"
import { LanguageCode } from "@/types"
import { DifficultyButton } from "./DifficultyButton"

type LanguageDisplayProps = {
  languageCode: LanguageCode
}

export const LanguageDisplay = ({ languageCode }: LanguageDisplayProps) => {
  return (
    <div className={styles.LanguageDisplay}>
      <span className={styles.LanguageDisplay__Title}>Language Chat</span>
      <ReactCountryFlag
        className={styles.LanguageDisplay__Flag}
        countryCode="ES"
        svg={true}
      />
      <LiaExchangeAltSolid color={`var(--${languageCode}Color)`} size={30} />
    </div>
  )
}
