import scssStyles from "@/utils/scssStyles";
import { FC } from "react";
import styles from "./new-cta.module.scss";

interface INewCta {
  secundary?: boolean;
  className?: string;
  labelClassName?: string;
  label?: string;
  type?: "submit" | "reset" | "button";
  width?: string;
  icon?: JSX.Element;
  disable?: boolean;
  outline?: boolean;
  handleClick: () => void;
}
const Chevron: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8.555"
      height="14.281"
      viewBox="0 0 8.555 14.281"
      className={scssStyles([styles.icon, className ? className : ""])}
    >
      <path
        id="Caminho_8360"
        data-name="Caminho 8360"
        d="M12614.508,480.431l5.727,5.726-5.727,5.726"
        transform="translate(-12613.094 -479.016)"
        fill="none"
        stroke="#393939"
        stroke-linecap="round"
        stroke-width="2"
      />
    </svg>
  );
};

export const NewCta: FC<INewCta> = ({
  secundary = false,
  disable = false,
  outline = false,
  className,
  label,
  labelClassName,
  width = "100%",
  type = "button",
  handleClick,
  icon = <Chevron />,
}) => {
  return (
    <button
      title={label}
      type={type}
      style={{ width }}
      onClick={() => {
        !disable && handleClick();
      }}
      className={scssStyles([
        styles.primary,
        secundary ? styles.secundary : "",
        outline ? styles.outline : "",
        disable ? styles.disable : "",
        className ? className : "",
      ])}
    >
      <strong className={labelClassName}>{label}</strong> {icon}
    </button>
  );
};
