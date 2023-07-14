"use client"

import React from "react"

import classNames from "classnames"
import { GoDownload } from "react-icons/go"
import { IoIosRefresh } from "react-icons/io"

import styles from "./SidebarOptionIcon.module.css"
import { useLanguage } from "../../../DataProvider"



export interface SidebarOptionIconProps {
  name: "refresh" | "export"
  className?: string
  onClick?: () => Promise<void>
}

export const SidebarOptionIcon = ({
  name,
  className,
  onClick,
}: SidebarOptionIconProps) => {
  const { language } = useLanguage()

  const iconProps = React.useMemo(
    () => ({
      color: `var(--${language}Color)`,
      size: "25px",
    }),
    [language],
  )

  const icon = React.useMemo(() => {
    switch (name) {
      case "refresh":
        return <IoIosRefresh {...iconProps} />
      case "export":
        return <GoDownload {...iconProps} />
      default:
        return <>X</>
    }
  }, [iconProps, name])

  return (
    <span
      className={classNames(className, {
        [styles.Icon__Clickable]: onClick !== undefined,
      })}
      onClick={onClick}
    >
      {icon}
    </span>
  )
}
