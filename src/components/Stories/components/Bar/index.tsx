import scssStyles from "@/utils/scssStyles"
import { AnimatePresence } from "framer-motion"
import React from "react"
import styles from "./Bar.module.scss"
import { StoriesItemProps } from "@/models"

const Bar: React.FC<{
  items: StoriesItemProps[]
  currentIndex: number
  setCurrentIndex: (index: number) => void
  setSwipingNext: (swipingNext: boolean) => void
}> = ({ items, currentIndex, setCurrentIndex, setSwipingNext }) => {
  return (
    <div className={styles.bar}>
      {items.map((story, index) => {
        const hasGone = currentIndex > index
        const active = currentIndex === index
        return (
          <div
            key={`story-bar-${index}`}
            className={styles.barItemHolder}
            onClick={() => {
              setSwipingNext(currentIndex < index)
              setCurrentIndex(index)
            }}
          >
            <div
              className={scssStyles([
                styles.barItem,
                hasGone ? styles.hasGone : "",
                active ? styles.hasActive : "",
              ])}
            >
              <AnimatePresence>
                {active && (
                  <div
                    className={styles.loadinBar}
                    style={{
                      animationDuration: `${story.durationInS}s`,
                      animationPlayState: "running",
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Bar
