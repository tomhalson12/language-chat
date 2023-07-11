"use client"

import styles from "./page.module.css"

import { MainContent } from "@/components/MainContent"
import React from "react"
import { Sidebar } from "@/components/Sidebar"

export default function Home() {
  return (
    <div className={styles.Home}>
      <Sidebar />
      <MainContent />
    </div>
  )
}
