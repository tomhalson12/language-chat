
import { ReactNode } from "react"
import React from "react"

import classNames from "classnames"
import { BsChevronDown } from "react-icons/bs"

import styles from "./SidebarOption.module.css"
import { SidebarOptionIcon, SidebarOptionIconProps } from "./SidebarOptionIcon"

type SidebarOptionProps = {
  title: string
  description: string
  allowScroll: boolean
  collapsible: boolean
  iconName: SidebarOptionIconProps["name"]
  iconClassName?: SidebarOptionIconProps["className"]
  iconOnClick?: SidebarOptionIconProps["onClick"]
  children: ReactNode
}

export const SidebarOption = ({
  title,
  description,
  allowScroll,
  iconName,
  iconClassName,
  iconOnClick,
  collapsible,
  children,
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
            <SidebarOptionIcon
              name={iconName}
              className={iconClassName}
              onClick={iconOnClick}
            />
          </div>

          {children}
        </div>
      ) : null}
    </div>
  )
}
