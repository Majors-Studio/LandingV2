'use client'

import Conditional from "@/components/Conditional"
import { Context } from "@/contexts/MainContext"
import { HeroDesktop } from "@/sections/hero-section"
import MainStories from "@/sections/stories-section"
import React, { useContext, useEffect } from "react"

export default function Home() {
  const { dispatch } = useContext(Context)

  const handleResize = () => {
    dispatch({
      type: "SET_PAGE",
      payload: { pageX: window?.innerWidth },
    })

    dispatch({
      type: "SET_IS_DESKTOP",
      payload: { isDesktop: window?.innerWidth > 1024 },
    })
    
    dispatch({
      type: "SET_IS_MOBILE",
      payload: { isMobile: window?.innerWidth <= 1024 },
    })
  }

  useEffect(() => {
    window?.addEventListener("resize", handleResize)
    handleResize()
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <main>
      <Conditional notOn="mobile">
        <HeroDesktop />
      </Conditional>
      <Conditional notOn="desktop">
        <MainStories />
      </Conditional>
    </main>
  )
}
