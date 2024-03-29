import { Cards, Display } from "@/components"
import { dataHero, IHero } from "@/data/hero.data"
import scssStyles from "@/utils/scssStyles"
import React, { FC } from "react"
import styles from "./HeroDesktop.module.scss"

export const HeroDesktop: FC = () => {
  const previous = React.useRef<(() => void) | null>(null)
  const next = React.useRef<(() => void) | null>(null)

  const items: IHero[] | any = []

  dataHero.map((item, index) =>
    items.push({
      body: (
        <div
          className={scssStyles([styles.slides])}
          aria-label={item.altTag}
          title={item.titleTag}
        >
          <div className={styles.content}>
            <div
              className={scssStyles([
                index < 1
                  ? styles.first_descriptionContent
                  : styles.descriptionContent,
              ])}
            >
              {item.id === "0" ? (
                <></>
              ) : (
                <>
                  <h2 className={styles.tlt}>{item.title}</h2>
                </>
              )}

              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ),
      background: {
        src: item.src.desktop,
        alt: item.altTag,
      },
      teste: item.src.desktop,
      altteste: item.altTag,
      titleteste: item.titleTag,
    })
  )

  const dadosFiltrados = dataHero
    .map((d) => ({
      ...d,
      src: d.cardSrc,
      title: d.cardTitle,
    }))
    .filter((d) => d.id !== "0")
  return (
    <div
      id="desktopDisplay"
      className={styles.container}
    >
      {/* não retirar esse h1 ele é fundamental para os headers de SEO */}
      {<h1 className={styles.pageHeading}>{items[0].title}</h1>}
      <Display
        previousEvent={(e) => {
          previous.current = e
        }}
        nextEvent={(e) => {
          next.current = e
        }}
        items={items}
      />
      <Cards
        items={dadosFiltrados.map((d) => ({
          ...d,
          src: d.cardSrc.desktop,
          title: d.cardTitle,
        }))}
      />
    </div>
  )
}
