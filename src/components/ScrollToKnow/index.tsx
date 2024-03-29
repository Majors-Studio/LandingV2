import { StoriesItemProps } from "@/models"
import scssStyles from "@/utils/scssStyles"
import React from "react"
import { Chevron } from "../chevron"
import styles from "./ScrollToKnow.module.scss"

// import { Container } from './styles';

const ScrollToKnow: React.FC<{
  items: StoriesItemProps[]
  currentIndex: number
}> = ({ items, currentIndex }) => {
  return (
    <div
      className={scssStyles([
        styles.scrollCta,
        items[currentIndex].scrollCtaOrientation === "vertical"
          ? styles.scrollCtaVertical
          : styles.scrollCtaHorizontal,
      ])}
    >
      <p>Scroll para saber mais</p>
      <Chevron
        chevronAngule={-90}
        variant="secundary"
        chevronColor="#fff"
        handleClick={() => null}
      />
    </div>
  )
}

export default ScrollToKnow
