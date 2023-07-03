import styles from "./Sidebar.module.css"

import { ReactNode } from "react"
import classNames from "classnames"

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
  return (
    <div
      className={classNames(styles.Sidebar, {
        [styles.Sidebar__Reverse]: dividerSide === "left",
      })}
    >
      <div className={styles.Sidebar__Content}>
        <div className={styles.Sidebar__Header}>
          <div className={styles.Sidebar__Title}>
            {title}
            {icon}
          </div>
          <span className={styles.Sidebar__Description}>{description}</span>
        </div>
        {children}
      </div>
      {/* <div className={styles.Sidebar__Divider} /> */}
    </div>
  )
}
