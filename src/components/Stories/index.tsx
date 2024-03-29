import { FC, useState, useEffect, useRef, useContext } from "react"
import { AnimatePresence } from "framer-motion"
import styles from "./Stories.module.scss"
import { Pointer } from "@/components"
import regex from "@/utils/testRegex"
import { StoriesBackgroundStyleProps, StoriesItemProps } from "@/models"
import scssStyles from "@/utils/scssStyles"
import { Context } from "@/contexts/MainContext"
import { Chevron } from "../chevron"
import Story from "./components/Story"

interface StoriesProps {
  items: StoriesItemProps[]
}

const Stories: FC<StoriesProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [swipingNext, setSwipingNext] = useState(true)
  const playControl = useState(true)
  const wrapperRef = useRef<null | HTMLDivElement>(null)
  const timer = useRef<NodeJS.Timeout | null>(null)
  const { state } = useContext(Context)

  useEffect(() => {
    if (timer?.current) {
      clearTimeout(timer.current)
    }
    if (wrapperRef) {
      if ((wrapperRef?.current as HTMLDivElement)?.style) {
        ;(wrapperRef.current as HTMLDivElement).style.backgroundColor =
          items[currentIndex].background?.color ?? "transparent"
      }
    }
    timer.current = setTimeout(() => {
      setSwipingNext(true)
      setCurrentIndex((i) => {
        const nI = i >= items.length - 1 ? 0 : i + 1
        return nI
      })
    }, items[0].durationInS * 100000)

    return () => {
      if (timer?.current) {
        clearTimeout(timer.current)
      }
    }
  }, [items, currentIndex])

  const next = () => {
    setSwipingNext(true)
    setCurrentIndex((i) => {
      const nI = i >= items.length - 1 ? 0 : i + 1
      return nI
    })
  }

  const previous = () => {
    setSwipingNext(false)
    setCurrentIndex((i) => {
      const nI = i <= 0 ? items.length - 1 : i - 1
      return nI
    })
  }

  return (
    <section className={styles.container}>
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
      <div ref={wrapperRef} className={styles.wrapper}>
        <button
          title="Story anterior"
          className={styles.previous}
          onClick={() => {
            previous()
          }}
        />
        <button
          title="Próximo story"
          className={styles.next}
          onClick={() => {
            next()
          }}
        />
        <div className={styles.clickCta}>
          <Pointer />
          <p>Toque e veja as novidades</p>
        </div>
        <div
          className={scssStyles([
            styles.scrollCta,
            items[currentIndex].scrollCtaOrientation === "vertical"
              ? styles.scrollCtaVertical
              : styles.scrollCtaHorizontal,
          ])}
        >
          <p>Scroll para saber mais</p>
          <Chevron handleClick={() => null} />
        </div>

        <div className={styles.nextTopic}>
          <div
            className={styles.nextTopicText}
            onClick={() => {
              next()
            }}
          >
            {!!items[currentIndex]?.showNext &&
              items[currentIndex + 1]?.title && (
                <>
                  {items[currentIndex + 1].nextTitle}
                  <Chevron handleClick={() => null} />
                </>
              )}
          </div>
        </div>

          {items.map((story, index) => {
            const getBgs = () => {
              if (state.layout.pageX > 1024) {
                return story.background?.src?.fullPath3x
              }

              if (state.layout.pageX < 768) {
                return story.background?.src?.fullPath
              }
              return story.background?.src?.fullPath2x
            }
            const style: StoriesBackgroundStyleProps = {
              backgroundImage:
                story.background?.src &&
                regex.testImage(story.background.src.fullPath)
                  ? `url('${getBgs()}')`
                  : "unset",
              backgroundColor: story.background?.color
                ? story.background.color
                : "unset",
            }
            if (story.background?.style?.backgroundPosition) {
              style["backgroundPosition"] =
                story.background?.style?.backgroundPosition
            }
            if (story.background?.style?.backgroundSize) {
              style["backgroundSize"] = story.background?.style?.backgroundSize
            }
            if (story.background?.style?.backgroundRepeat) {
              style["backgroundRepeat"] =
                story.background?.style?.backgroundRepeat
            }
            return (
              <Story
                key={`story---${story.durationInS}${index}`}
                story={story}
                index={index}
                style={style}
                previous={previous}
                next={next}
                currentIndex={currentIndex}
                swipingNext={swipingNext}
                state={playControl}
              />
            )
          })}
        {!!items[currentIndex]?.includeGradient && (
          <div className={styles.gradient} />
        )}
      </div>
    </section>
  )
}

export default Stories
