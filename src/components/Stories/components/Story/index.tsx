import useLongPressDiv from '@/hooks/useLongPressDiv';
import { StoriesBackgroundStyleProps, StoriesItemProps } from '@/models';
import regex from '@/utils/testRegex';
import React, { FC, useCallback, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import {  motion } from "framer-motion"
import styles from "./Story.module.scss"
import Image from 'next/image';

interface StoryProps {
  story: StoriesItemProps
  swipingNext: boolean
  index: number
  currentIndex: number
  style: StoriesBackgroundStyleProps
  next: () => void
  previous: () => void
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}
const Story: FC<StoryProps> = ({
  story,
  index,
  swipingNext,
  currentIndex,
  style,
  state,
  next,
  previous,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const active = index === currentIndex
  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.defaultMuted = true
      videoRef.current.muted = true
    }
  }, [videoRef])

  const longPress = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    videoRef?.current?.pause()
    state[1](false)
    e.preventDefault()
  }

  const clear = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    videoRef?.current?.play()
    state[1](true)
    e.preventDefault()
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      next()
    },
    onSwipedRight: () => {
      previous()
    },
  })

  const {
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchStart,
    onTouchCancel,
  } = useLongPressDiv(
    {
      onLongPress: longPress,
      onClear: clear,
    },
    {
      delay: 400,
    }
  )

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

  const isVideo = regex.testVideo(story?.videoProps?.src ?? "")

  return (
    <motion.div
      {...swipeHandlers}
      key={`story-l-${index}`}
      className={styles.story}
      onMouseDown={(e) => onMouseDown(e)}
      onMouseLeave={(e) => onMouseLeave(e)}
      onMouseUp={(e) => onMouseUp(e)}
      onTouchEnd={(e) => onTouchEnd(e)}
      onTouchStart={(e) => onTouchStart(e)}
      onTouchCancel={(e) => onTouchCancel(e)}
      layoutId={`story-v-v-${index}`}
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
        {story.videoProps?.src && isVideo && (
          <>
            {/* <LoadingFlag /> */}
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
          </>
        )}
        <motion.div
          {...swipeHandlers}
          key={`story-${index}`}
          className={styles.story}
          initial={{
            x: swipingNext ? "100%" : "-100%",
          }}
          animate={{
            x: "0%",
          }}
          exit={{
            x: swipingNext ? "-100%" : "100%",
          }}
          transition={{
            ease: "easeInOut",
            delay: 0.1,
            duration: 0.2,
          }}
        >
          <Image
            className={styles.imageHolder}
            alt={story.altTag || ""}
            title={story.titleTag}
            src={story.teste}
            layout="fill"
            priority
          />
          {story.body}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Story;