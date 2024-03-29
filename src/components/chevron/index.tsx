import { FC } from "react";
import styles from "./chevron.module.scss";
import scssStyles from "@/utils/scssStyles";

interface IChevron {
  handleClick: () => void;
  variant?: "primary" | "secundary";
  className?: string;
  chevronAngule?: number;
  chevronColor?: string;
  disable?: boolean;
}
export const Chevron: FC<IChevron> = ({
  handleClick,
  variant = "primary",
  className,
  chevronAngule = 0,
  chevronColor = "#000",
  disable = false,
}) => {
  return (
    <div
      onClick={() => {!disable && handleClick()}}
      className={scssStyles([
        className ? className : "",
        styles.primary,
        variant === "secundary" ? styles.secundary : "",
        disable === true ? styles.disable : "",
      ])}
    >
      {variant === "secundary" ? (
        <svg
          width="8.555"
          height="13.943"
          viewBox="0 0 8.555 13.943"
          className={styles.chevron}
          style={{ transform: `rotate(${chevronAngule}deg)` }}
        >
          <path
            id="Caminho_8361"
            data-name="Caminho 8361"
            d="M12614.508,480.431l.954.954,4.772,4.772-5.727,5.726"
            transform="translate(12621.648 493.298) rotate(-180)"
            fill="none"
            stroke={chevronColor}
            stroke-linecap="round"
            stroke-width="2"
          />
        </svg>
      ) : (
        <svg
          width="11.099"
          height="19.513"
          viewBox="0 0 11.099 19.513"
          className={styles.chevron}
          style={{ transform: `rotate(${chevronAngule}deg)` }}
        >
          <g id="seta" transform="translate(9.691 18.832) rotate(180)">
            <path
              id="Caminho_3"
              data-name="Caminho 3"
              d="M0,0,9.634,8.959,18.1,0"
              transform="translate(8.959) rotate(90)"
              fill="none"
              stroke={chevronColor}
              stroke-width="2"
            />
          </g>
        </svg>
      )}
    </div>
  );
};
