"use client";

import { useMainContext } from "@/contexts/MainContext";
import { FC } from "react";

interface ConditionalProps {
  notOn?: "desktop" | "mobile";
  desktop?: JSX.Element | null;
  mobile?: JSX.Element | null;
  condition?: boolean;
  children: React.ReactNode;
}

const Conditional: FC<ConditionalProps> = ({
  notOn,
  mobile,
  desktop,
  condition,
  children,
}) => {
  const { state } = useMainContext();

  console.log("isMobile", state.layout.isMobile);
  console.log("isDesktop", state.layout.isDesktop);

  if (condition !== null && condition) {
    return <>{children}</>;
  }
  if ((notOn === "desktop" || !!mobile) && !state.layout.isDesktop) {
    return <>{children ?? mobile}</>;
  }
  if ((notOn === "mobile" || !!desktop) && state.layout.isDesktop) {
    return <>{children ?? desktop}</>;
  }
  return null;
};

export default Conditional;
