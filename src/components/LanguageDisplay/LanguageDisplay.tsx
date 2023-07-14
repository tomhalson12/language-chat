"use client"

import React from "react"

import ReactCountryFlag from "react-country-flag"
import { LiaExchangeAltSolid } from "react-icons/lia"

import styles from "./LanguageDisplay.module.css"
import { LanguageSelectionModal } from "./LanguageSelectionModal"
import { useLanguage } from "../DataProvider"

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
      <LanguageSelectionModal
        open={language === undefined}
        setLanguage={setLanguage}
      />
    </div>
  )
}
