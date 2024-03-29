import { FC } from "react";

export const CardArrowIcon: FC<{ className?: string; color?: string }> = ({
  color = "currentColor",
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8.944"
      height="8.181"
      viewBox="0 0 8.944 8.181"
      className={className}
    >
      <g id="seta" transform="translate(-113.5 -115.908)">
        <path
          id="seta-2"
          data-name="seta"
          d="M0,0,3.769,3.737,7.474,0"
          transform="translate(118 123.737) rotate(-90)"
          fill="none"
          stroke={color}
          stroke-width="1"
        />
        <line
          id="Linha_1"
          data-name="Linha 1"
          x2="8"
          transform="translate(113.5 120)"
          fill="none"
          stroke={color}
          stroke-width="1"
        />
      </g>
    </svg>
  );
};
