import React from "react"

import classNames from "classnames"
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"

import styles from "./Sidebar.module.css"
import { Difficulties } from "../Difficulties"
import { Topics } from "../Topics"

export const Sidebar = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div
      className={classNames(styles.Sidebar__Container, {
        [styles.Sidebar__ContainerOpen]: open,
      })}
    >
      <div
        className={classNames(styles.Sidebar, {
          [styles.Sidebar__open]: open,
        })}
      >
        <Difficulties />
        <Topics />
        {/* <SavedPhrases /> */}
      </div>

      <div
        className={classNames(styles.Sidebar__Tab, {
          [styles.Sidebar__TabOpen]: open,
        })}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <RxCross1 size={25} color="var(--textColor)" />
        ) : (
          <RxHamburgerMenu size={30} color="var(--textColor)" />
        )}
      </div>
    </div>
  )
}
