import { StoriesBackgroundStyleProps, DisplayItemProps } from "@/models"
import {
  FC,
  useState,
  useRef,
  useCallback,
  useEffect,
  CSSProperties,
  useContext,
} from "react"
import styles from "./Display.module.scss"
import regex from "@/utils/testRegex"
import {  motion } from "framer-motion"
import { SwipeableHandlers, useSwipeable } from "react-swipeable"
import SwiperCore, { A11y, Keyboard, Thumbs } from "swiper"
import { Context } from "@/contexts/MainContext"
import Image from "next/image"
import { Chevron } from "../chevron"

SwiperCore.use([A11y, Keyboard, Thumbs])

const VideoElement: FC<{ story: DisplayItemProps }> = ({ story }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.defaultMuted = true
      videoRef.current.muted = true
    }
  }, [videoRef])

  if (!story.videoProps) {
    return null
  }
  return (
    <video
      ref={videoRef}
      autoPlay={story.videoProps.autoPlay ?? true}
      muted
      loop={story.videoProps.loop ?? true}
      playsInline
      className={styles.video}
    >
      <source src={story.videoProps.src} />
    </video>
  )
}

interface SlideProps {
  index: number
  swipingNext: boolean
  swipe: DisplayItemProps
  swipeHandlers: SwipeableHandlers
  style: CSSProperties
}

const Slide: FC<SlideProps> =
  ({ index, swipe, swipingNext, swipeHandlers, style }) => {
    const { state } = useContext(Context)

    const currentIndex = state.layout.heroIndex
    const active = index === state.layout.heroIndex
    const animate = useCallback(() => {
      if (active)
        return {
          opacity: 1,
          left: "0%",
        }
      if (swipingNext)
        return {
          opacity: 0,
          left: index < currentIndex ? "-100%" : "100%",
        }
      return {
        opacity: 0,
        left: index < currentIndex ? "-100%" : "100%",
      }
    }, [active, swipingNext, currentIndex, index])
    return (
      <motion.div
        {...swipeHandlers}
        className={styles.story}
        layoutId={`story-desktop--${index}`}
        initial={
          !active
            ? {
                opacity: 0,
              }
            : undefined
        }
        animate={animate()}
        transition={{
          left: { type: "spring", stiffness: 300, damping: 30 },
          duration: 0.2,
        }}
      >
        <div className={styles.imageHolder} style={style}>
          {swipe.videoProps?.src && regex.testVideo(swipe.videoProps.src) && (
            <VideoElement story={swipe} />
          )}

          <Image
            className={styles.bgHolder}
            alt={swipe.altteste || ""}
            title={swipe.titleteste}
            src={swipe.teste}
            layout="fill"
            priority
          />
          {swipe.body}
        </div>
      </motion.div>
    )
  }

interface DisplayProps {
  items: DisplayItemProps[]
  previousEvent?: (event: () => void) => void
  nextEvent?: (event: () => void) => void
}

const Display: FC<DisplayProps> = 
  ({ items, nextEvent, previousEvent }) => {
    const [swipingNext, setSwipingNext] = useState(true)
    const [previousIsSet, setPreviousIsSet] = useState(false)
    const [nextIsSet, setNextIsSet] = useState(false)
    const { state, dispatch } = useContext(Context)

    const next = () => {
      setSwipingNext(true)
      const number =
        state.layout.heroIndex >= items.length - 1
          ? 0
          : state.layout.heroIndex + 1

      dispatch({
        type: "SET_HERO_INDEX",
        payload: { heroIndex: number },
      })
    }

    const previous = () => {
      setSwipingNext(false)
      const number =
        state.layout.heroIndex <= 0
          ? items.length - 1
          : state.layout.heroIndex - 1

      dispatch({
        type: "SET_HERO_INDEX",
        payload: { heroIndex: number },
      })
    }

    if (previousEvent && !previousIsSet) {
      previousEvent(previous)
      setPreviousIsSet(true)
    }

    if (nextEvent && !nextIsSet) {
      nextEvent(next)
      setNextIsSet(true)
    }

    const swipeHandlers = useSwipeable({
      trackMouse: true,
      onSwipedLeft: () => {
        next()
      },
      onSwipedRight: () => {
        previous()
      },
    })

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
            {items.map((swipe, index) => {
              const getBgs = () => {
                if (state.layout.isDesktop) {
                  return swipe.background?.src?.fullPath
                }
                if (state.layout.pageX < 768) {
                  return swipe.background?.src?.fullPath
                }
                return swipe.background?.src?.fullPath2x
              }

              const style: StoriesBackgroundStyleProps = {
                backgroundImage:
                  swipe.background?.src &&
                  regex.testImage(swipe.background.src.fullPath)
                    ? `url('${getBgs()}')`
                    : "unset",
                backgroundColor: swipe.background?.color
                  ? swipe.background.color
                  : "unset",
              }

              if (swipe.background?.style?.backgroundPosition) {
                style["backgroundPosition"] =
                  swipe.background?.style?.backgroundPosition
              }
              if (swipe.background?.style?.backgroundSize) {
                style["backgroundSize"] =
                  swipe.background?.style?.backgroundSize
              }
              if (swipe.background?.style?.backgroundRepeat) {
                style["backgroundRepeat"] =
                  swipe.background?.style?.backgroundRepeat
              }
              return (
                <Slide
                  key={`swipe--${index}`}
                  index={index}
                  swipe={swipe}
                  style={style}
                  swipeHandlers={swipeHandlers}
                  swipingNext={swipingNext}
                />
              )
            })}

          <Chevron
            className={styles.previous}
            chevronAngule={180}
            chevronColor="#393939"
            handleClick={() => {
              previous()
            }}
          />
          <Chevron
            className={styles.next}
            chevronColor="#393939"
            handleClick={() => {
              next()
            }}
          />
        </div>
      </div>
    )
  }

export default Display
