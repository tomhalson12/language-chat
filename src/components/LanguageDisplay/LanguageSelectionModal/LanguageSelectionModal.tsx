import ReactCountryFlag from "react-country-flag"
import Modal from "react-modal"

import { getCountryCode } from "@/components/DataProvider"
import { Language, languages } from "@/types"

import styles from "./LanguageSelectionModal.module.css"

interface LanguageSelectionModalProps {
  open: boolean
  setLanguage: (language: Language) => void
}

export const LanguageSelectionModal = ({
  open,
  setLanguage,
}: LanguageSelectionModalProps) => {
  return (
    <Modal
      isOpen={open}
      className={styles.LanguageSelectionModal}
      style={{ overlay: { background: "var(--modalBackground)" } }}
    >
      <div className={styles.LanguageSelectionModal__Flags}>
        {languages.map((lang, i) => (
          <ReactCountryFlag
            key={i}
            className={styles.LanguageSelectionModal__FlagLarge}
            onClick={() => setLanguage(lang)}
            countryCode={getCountryCode(lang)}
            svg={true}
          />
        ))}
      </div>
    </Modal>
  )
}
