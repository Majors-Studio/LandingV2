import { Context } from "@/contexts/MainContext";
import scssStyles from "@/utils/scssStyles";
import { observer } from "mobx-react-lite";
import { FC, useContext } from "react";
import styles from "./HamburguerButton.module.scss";

const HamburguerButton: FC<{ handleClick: () => void; title: string }> =
  observer(({ handleClick, title }) => {
    const { state } = useContext(Context);
    return (
      <div className={styles.container}>
        <button
          title={title}
          className={scssStyles([
            styles.button,
            state.layout.isMenuOpen ? styles.active : "",
          ])}
          onClick={() => {
            handleClick();
          }}
        >
          <svg
            className={styles.burger}
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path
              className={scssStyles([styles.line, styles.line1])}
              d="M 50,35 H 30 M 50,35 H 70 V 38 H 30 V 41 H 70"
            />
            <path
              className={scssStyles([styles.line, styles.line2])}
              d="M 50,50 H 30 V 47 H 70 V 44 H 30"
            />
            <path
              className={scssStyles([styles.line, styles.line3])}
              d="M 50,50 H 70 V 53 H 30 V 56 H 70"
            />
            <path
              className={scssStyles([styles.line, styles.line4])}
              d="M 50,65 H 70 M 50,65 H 30 V 62 H 70 V 59 H 30"
            />
          </svg>
          <svg
            style={{ display: !state.layout.isMenuOpen ? "none" : "" }}
            className={styles.x}
            xmlns="http://www.w3.org/2000/svg"
            width="17.211"
            height="17.211"
            viewBox="0 0 17.211 17.211"
          >
            <g
              id="Grupo_19557"
              data-name="Grupo 19557"
              transform="translate(-13.394 -11.394)"
            >
              <path
                id="Caminho_250"
                data-name="Caminho 250"
                d="M0,.427,12.985.174,21.874,0"
                transform="translate(14.417 12.115) rotate(45)"
                fill="none"
                stroke="#e5b159"
                stroke-width="2"
              />
              <path
                id="Caminho_4827"
                data-name="Caminho 4827"
                d="M0,.427,12.985.174,16.406.107,18.229.071,21.874,0"
                transform="translate(14.115 27.583) rotate(-45)"
                fill="none"
                stroke="#e5b159"
                stroke-width="2"
              />
            </g>
          </svg>
        </button>
      </div>
    );
  });

export default HamburguerButton;
