"use client"

import styles from "./LanguageDisplay.module.css"

import ReactCountryFlag from "react-country-flag"
import { LiaExchangeAltSolid } from "react-icons/lia"
import React from "react"
import { getCountryCode, useLanguage } from "../DataProvider"
import Modal from "react-modal"
import { languages } from "@/types"

export const LanguageDisplay = () => {
  const { language, languageCountryCode, setLanguage } = useLanguage()

  return (
    <div className={styles.LanguageDisplay}>
      {language ? (
        <>
          <ReactCountryFlag
            className={styles.LanguageDisplay__Flag}
            countryCode={languageCountryCode}
            svg={true}
          />
          <span className={styles.LanguageDisplay__ChangeIcon}>
            <LiaExchangeAltSolid
              style={{ cursor: "pointer", minWidth: "40px", minHeight: "40px" }}
              onClick={() => setLanguage(undefined)}
              color={`var(--${language}Color)`}
            />
          </span>
        </>
      ) : null}
      <Modal
        isOpen={language === undefined}
        className={styles.LanguageDisplay__Modal}
        style={{ overlay: { background: "var(--modalBackground)" } }}
      >
        Choose a language
        <div className={styles.LanguageDisplay__Modal__Flags}>
          {languages.map((lang, i) => (
            <ReactCountryFlag
              key={i}
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
