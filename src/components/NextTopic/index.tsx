import React from "react"
import { Chevron } from "../chevron"
import styles from "./NextTopic.module.scss"
import { StoriesItemProps } from "@/models"

const NextTopic: React.FC<{
    items: StoriesItemProps[]
    currentIndex: number
    next: () => void
}> = ({
    items,
    currentIndex,
    next,
}) => {
  return (
    <div className={styles.nextTopic}>
      <div
        className={styles.nextTopicText}
        onClick={() => {
          next()
        }}
      >
        {!!items[currentIndex]?.showNext && items[currentIndex + 1]?.title && (
          <>
            {items[currentIndex + 1].nextTitle}
            <Chevron
              variant="secundary"
              chevronAngule={180}
              chevronColor="#fff"
              handleClick={() => null}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default NextTopic
