import { FC } from "react";

interface ChevronProps {
  color?: string;

  direction?: "down" | "right" | "left" | "up";
}

export const ChevronIcon: FC<ChevronProps> = ({ color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16.858"
      height="10"
      viewBox="0 0 16.858 10"
    >
      <path
        d="M262.276-616.768l-8.429-8.429,1.571-1.571,6.858,6.858,6.858-6.858L270.7-625.2Z"
        transform="translate(-253.847 626.768)"
        fill={color}
      />
    </svg>
  );
};

export const ChevronIconOutward: FC<ChevronProps> = ({
  color = "currentColor",
}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path
        d="M1.022,12,0,10.989,9.633,1.452H.875V0H12.133V11.134H10.665V2.473Z"
        fill={color}
        transform="translate(10 10)"
      />
    </svg>
  );
};
