"use client"

import styles from "./LanguageDisplay.module.css"

import ReactCountryFlag from "react-country-flag"
import { LiaExchangeAltSolid } from "react-icons/lia"
import React from "react"
import { getCountryCode, useLanguage } from "../LanguageProvider"
import Modal from "react-modal"
import { languages } from "@/types"

export const LanguageDisplay = () => {
  const { language, languageCountryCode, setLanguage } = useLanguage()

  return (
    <div className={styles.LanguageDisplay}>
      <span className={styles.LanguageDisplay__Title}>Language Chat</span>
      {language ? (
        <>
          <ReactCountryFlag
            className={styles.LanguageDisplay__Flag}
            countryCode={languageCountryCode}
            svg={true}
          />
          <LiaExchangeAltSolid
            style={{ cursor: "pointer", minWidth: "30px", minHeight: "30px" }}
            onClick={() => setLanguage(undefined)}
            color={`var(--${language}Color)`}
          />
        </>
      ) : null}
      <Modal
        isOpen={language === undefined}
        className={styles.LanguageDisplay__Modal}
        style={{ overlay: { background: "rgba(255,255,255,0.8)" } }}
      >
        Choose a language
        <div className={styles.LanguageDisplay__Modal__Flags}>
          {languages.map((lang) => (
            <ReactCountryFlag
              className={styles.LanguageDisplay__FlagLarge}
              onClick={() => setLanguage(lang)}
              countryCode={getCountryCode(lang)}
              svg={true}
            />
          ))}
        </div>
      </Modal>
    </div>
  )
}
