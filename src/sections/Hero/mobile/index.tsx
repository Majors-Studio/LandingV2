import { Stories } from "@/components/index"
import { FC } from "react"
import styles from "./stories-section.module.scss"
import { dataHero, IHero } from "@/data/hero.data"

const HeroMobile: FC = () => {
  const items: IHero[] | any = []
  dataHero.map((item) =>
    items.push({
      showNext: true,
      nextTitle: item.title.mobile,
      title: item.title.mobile,
      description: item.description.mobile,
      body: (
        <>
          <div className={styles.slides}>
            <div className={styles.slidesContainer}>
              <div className={styles.bottomBox}>
                <h2>{item.title.mobile}</h2>
                <p className={styles.contentText}>
                  {item.description.mobile}
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      scrollCtaOrientation: "vertical",
      durationInS: 15,
      teste: item.src.mobile,
      titleTag: item.titleTag,
      altTag: item.altTag,
    })
  )
  return (
    <div
      id="mobileStories"
      className={styles.container}
    >
      <Stories items={items} />
    </div>
  )
}

export default HeroMobile
