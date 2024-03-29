import { DisplayItemProps } from '@/models';
import React, { FC, useEffect, useRef } from 'react';
import styles from "./VideoElement.module.scss"


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

export default VideoElement;