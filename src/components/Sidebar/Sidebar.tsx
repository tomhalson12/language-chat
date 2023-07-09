import styles from "./Sidebar.module.css"

import { ReactNode } from "react"
import classNames from "classnames"
import React from "react"
import { BsChevronDown } from "react-icons/bs"

type SidebarProps = {
  title: string
  description: string
  dividerSide: "left" | "right"
  icon: ReactNode
  children: ReactNode
}

export const Sidebar = ({
  title,
  description,
  dividerSide,
  icon,
  children,
}: SidebarProps) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div
      className={classNames(styles.Sidebar, {
        [styles.Sidebar__Reverse]: dividerSide === "left",
      })}
    >
      <div className={styles.Sidebar__Content}>
        <div className={styles.Sidebar__Header}>
          <div
            className={classNames(
              styles.Sidebar__Title,
              styles.Sidebar__TitleContainer,
              {
                [styles.Sidebar__Reverse]: dividerSide === "left",
              },
            )}
            onClick={() => setOpen(!open)}
          >
            {title}
            <span
              className={classNames(styles.Sidebar__Chevron, {
                [styles.Sidebar__OpenChevron]: open,
              })}
            >
              <BsChevronDown color="#808080" />
            </span>
          </div>
        </div>

        <div
          className={classNames(styles.Sidebar__MainContent, {
            [styles.Sidebar__MainContentOpen]: open,
          })}
        >
          <div className={styles.Sidebar__DescriptionContainer}>
            <span className={styles.Sidebar__Description}>{description}</span>
            {icon}
          </div>
          <div className={styles.Sidebar__MainContentChildren}>{children}</div>
        </div>
      </div>
      {/* <div className={styles.Sidebar__Divider} /> */}
    </div>
  )
}
