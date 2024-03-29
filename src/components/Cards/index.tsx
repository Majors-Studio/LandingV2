import { Context } from "@/contexts/MainContext";
import { FC, useContext } from "react";
import styles from "./Cards.module.scss";
import { IHero } from "@/data/hero.data";

export interface CardsProps {
  items: IHero[];
}

const Cards: FC<CardsProps> = ({ items }) => {
  const { state, dispatch } = useContext(Context);

  const handleSetHeroIndex = (index: number) => {
    dispatch({
      type: "SET_HERO_INDEX",
      payload: { heroIndex: index },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {items.map((item, index) => {
          return (
            <button
              className={
                index === state.layout.heroIndex - 1
                  ? styles.selected
                  : ""
              }
              onClick={() => {
                handleSetHeroIndex(index + 1);
                
              }}
              key={`card-${index}`}
            >
              {state.layout.isDesktop ? item.title.desktop : item.title.mobile}
            </button>
          );
        })}
      </div>

      <a href="#" className={styles.anchor}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.634"
          height="11.443"
          viewBox="0 0 18.634 11.443"
        >
          <path
            id="seta"
            d="M0,0,8.326,8.256,16.513,0"
            transform="translate(1.056 1.065)"
            fill="none"
            stroke="#fff"
            stroke-width="3"
          />
        </svg>

        <span>Arraste para saber mais</span>
      </a>

    </div>
  );
}

export default Cards;
