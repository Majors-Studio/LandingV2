'use client'

import Conditional from "@/components/Conditional"
import { Context } from "@/contexts/MainContext"
import HeroDesktop from "@/sections/Hero/desktop"
import HeroMobile from "@/sections/Hero/mobile"
import React, { useContext, useEffect } from "react"

export default function Home() {
  const { state, dispatch } = useContext(Context)

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
    
    if (state.layout.isDesktop && state.layout.isMenuOpen) {
      dispatch({
        type: "SET_IS_MENU_OPEN",
        payload: { isMenuOpen: false },
      });
    }
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
        <HeroMobile />
      </Conditional>
    </main>
  )
}
