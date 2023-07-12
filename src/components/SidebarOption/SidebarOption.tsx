import styles from "./SidebarOption.module.css"

import { ReactNode } from "react"
import classNames from "classnames"
import React from "react"
import { BsChevronDown } from "react-icons/bs"

type SidebarOptionProps = {
  title: string
  description: string
  allowScroll: boolean
  icon: ReactNode
  collapsible: boolean
  children: ReactNode
}

export const SidebarOption = ({
  title,
  description,
  allowScroll,
  icon,
  children,
  collapsible,
}: SidebarOptionProps) => {
  const [open, setOpen] = React.useState(collapsible ? false : true)

  return (
    <div
      className={classNames(styles.SidebarOption, {
        [styles.SidebarOption__hidden]: allowScroll,
      })}
    >
      <div
        className={styles.SidebarOption__TitleContainer}
        onClick={() => !collapsible || setOpen(!open)}
      >
        {title}
        {collapsible ? (
          <span
            className={classNames(styles.SidebarOption__Chevron, {
              [styles.SidebarOption__ChevronOpen]: open,
            })}
          >
            <BsChevronDown color="var(--chevronColor)" />
          </span>
        ) : null}
      </div>

      {open ? (
        <div
          className={classNames(styles.SidebarOption__Content, {
            [styles.SidebarOption__hidden]: allowScroll,
          })}
        >
          <div className={styles.SidebarOption__DescriptionContainer}>
            <span className={styles.SidebarOption__Description}>
              {description}
            </span>
            {icon}
          </div>

          {children}
        </div>
      ) : null}
    </div>
  )
}
