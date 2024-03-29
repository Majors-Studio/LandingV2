'use client'

import { PAGE_TITLE, brandLinks } from "@/constants";
import { Context } from "@/contexts/MainContext";
import useDocumentScrollThrottled from "@/hooks/useDocumentScrollThrottled";
import scssStyles from "@/utils/scssStyles";
import { observer } from "mobx-react-lite";
import { FC, useContext, useState } from "react";
import styles from "./Header.module.scss";
import HamburguerButton from "../HamburguerButton";

const Header: FC = observer(() => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [fuelModalOpen, setFuelModalOpen] = useState(false);
  const { dispatch, state } = useContext(Context);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  let timeout: NodeJS.Timeout;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  return (
    <div
      className={scssStyles([
        styles.container,
        shouldHideHeader ? styles.hide : "",
      ])}
    >
      <div className={scssStyles([styles.mobile])}>
        <HamburguerButton
          title="Abrir menu"
          handleClick={() => {
            const open = !state.layout.isMenuOpen;
            dispatch({
              type: "SET_IS_MENU_OPEN",
              payload: { isMenuOpen: open },
            });
          }}
        />
        <div>
          <a
            target="_blank"
            href={brandLinks.mainUrl}
            title={PAGE_TITLE}
            className={styles.title}
          >
            Majors Solutions
          </a>
        </div>
      </div>

    </div>
  );
});

export default Header;
