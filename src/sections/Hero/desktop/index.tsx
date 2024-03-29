import { Cards, Display } from "@/components"
import { dataHero, IHero } from "@/data/hero.data"
import scssStyles from "@/utils/scssStyles"
import React, { FC } from "react"
import styles from "./HeroDesktop.module.scss"

const HeroDesktop: FC = () => {
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
              <h2 className={styles.tlt}>{item.title.desktop}</h2>
              <p>{item.description.desktop}</p>
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

  return (
    <div id="desktopDisplay" className={styles.container}>
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
        items={dataHero.map((d) => ({
          ...d,
          src: d.cardSrc.desktop,
          title: d.cardTitle,
        }))}
      />
    </div>
  )
}

export default HeroDesktop
