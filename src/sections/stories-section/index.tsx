import { Stories } from "@/components/index"
import { FC } from "react"
import styles from "./stories-section.module.scss"
import { dataHero, IHero } from "@/data/hero.data"

const MainStories: FC = () => {
  const items: IHero[] | any = []
  dataHero.map((item, index) =>
    items.push({
      showNext: true,
      nextTitle: item.cardTitle,
      title: item.titleStories,
      description: item.descriptionStories,
      body: (
        <>
          <div className={styles.slides}>
            {index < 1 ? (
              <>
              </>
            ) : (
              <div className={styles.slidesContainer}>
                <div className={styles.bottomBox}>
                  {index > 0 && <h2>{item.titleStories}</h2>}
                  <p className={styles.contentText}>
                    {item.descriptionStories}
                  </p>
                </div>
              </div>
            )}
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

export default MainStories
