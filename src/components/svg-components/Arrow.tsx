import { FC } from "react";

const Arrow: FC<{
  chevronColor?: string;
  title?: string;
  handleClick?: () => void;
}> = ({ chevronColor = "#000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8.555"
      height="13.943"
      viewBox="0 0 8.555 13.943"
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
  );
};

export default Arrow;
