"use client"

import React from "react"

import { Chat } from "@/components/Chat"
import { LanguageDisplay } from "@/components/LanguageDisplay"
import { Sidebar } from "@/components/Sidebar"

import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.Home}>
      <Sidebar />
      <div className={styles.Home__Content}>
        <LanguageDisplay />
        <Chat />
      </div>
    </div>
  )
}
