'use client'
import { PAGE_TITLE, brandLinks } from "@/constants";
import {Context} from "@/contexts/MainContext";
import {
  dataMenuButtons,
  dataMenuLabels,
} from "@/data/menu.data";
import productDetails, {ProductTab} from "@/data/product-details.data";
import scssStyles from "@/utils/scssStyles";
import {observer} from "mobx-react-lite";
import {FC, useContext, useEffect, useState} from "react";
import styles from "./navigation.module.scss";
import {brand} from "@/assets";
import { Conditional } from "@/components";
import { NewCta } from "@/components/new-cta";

const Navigation: FC = observer(() => {
  const {state, dispatch} = useContext(Context);
  const [offset, setOffset] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSelectedDetailTab = (
    tab: ProductTab | undefined | null
  ): void => {
    if (tab) {
      dispatch({type: "SET_CURRENTLY_VISIBLE_NAV", payload: {tab: tab}});
    }

    dispatch({
      type: "SET_DETAIL_TAB",
      payload: {
        isMobile: true,
        selectedDetailTab: tab,
      },
    });
  };

  return (
    <>
      {state.layout.isMenuOpen && (
        <div
          className={styles.gestureDetector}
          onClick={() => {
            dispatch({
              type: "SET_MENU_OPEN",
              payload: {menuOpen: false},
            });
          }}
        />
      )}
      <nav
        id="mainNav"
        className={scssStyles([
          styles.container,
          state.layout.isMenuOpen ? styles.open : "",
          isScrolled ? styles.scrolled : '',
        ])}
        style={{
          // top: state.layout.bannerActive ? "80px" : 0,
          transition: "background-color 0.5s ease",
        }}
      >
        <div className={styles.scroller} style={{top: "80px"}}>
          <Conditional notOn="mobile">
            <div className={styles.productLogo}>
              <a
                target="_blank"
                href={brandLinks.mainUrl}
                title={PAGE_TITLE}
              >
                <img src={brand.logoNav} alt={PAGE_TITLE}/>
              </a>
            </div>
          </Conditional>

          <Conditional notOn={"desktop"}>
            {dataMenuLabels().map((item, index) => {
              return (
                <div className={styles.menuItem} key={`menuItem-${item.id}`}>
                  <a
                    key={item.id}
                    className={scssStyles([
                      styles.menuLinks,
                      // active ? styles.active : "",
                    ])}
                    href={item.url}
                    onClick={(e) => {
                      if (item.reference) {
                        dispatch({
                          type: "SCROLL_TO_REFERENCE",
                          payload: {reference: item.reference},
                        });
                        const tabReference = productDetails.find(
                          (p) => p.slug === item.slug
                        );
                        if (tabReference) {
                          handleSelectedDetailTab(
                            // state.layout.selectedDetailTab === tabReference.id
                            //   ? null :
                              tabReference
                          );
                        }
                        dispatch({
                          type: "SET_IS_MENU_OPEN",
                          payload: {isMenuOpen: false},
                        });
                      } else {
                        if (index === 0) {
                          window?.scrollTo({top: 0, behavior: "smooth"});
                        } else {
                          dispatch({
                            type: "SCROLL_TO_REFERENCE",
                            payload: {reference: item},
                          });
                        }
                        dispatch({
                          type: "SET_IS_MENU_OPEN",
                          payload: {isMenuOpen: false},
                        });
                      }

                      e.preventDefault();
                    }}
                  >
                    <span className={scssStyles([styles.linkUnderline])}>
                      {item.label}
                    </span>
                  </a>
                </div>
              );
            })}

            {!!dataMenuButtons.length && (
              <div className={styles.buttonsHolder}>
                {dataMenuButtons.map((item) => {
                  return (
                    <a
                      style={{width: "100%", padding: "0 16px"}}
                      target="_blank"
                      href={item.url}
                    >
                      <NewCta
                        handleClick={() => null}
                        label={item.label}
                        className={styles.menuButton}
                      />
                    </a>
                  );
                })}
              </div>
            )}
          </Conditional>
          <Conditional notOn={"mobile"}>
            <div className={styles.menuItemArea}>
              {dataMenuLabels()
                .filter((value) => value.numberId < 7)
                .map((item, index) => {
                  // const reference = state.layout.currentlyVisibleNav;
                  // const active = item.id === reference;

                  return (
                    <div
                      className={styles.menuItem}
                      key={`menuItem-${item.id}`}
                    >

                      <a
                        key={item.id}
                        className={scssStyles([
                          styles.menuLinks,
                          // active ? styles.active : "",
                        ])}
                        href={`${item.url}`}
                        onClick={(e) => {
                          if (index === 0) {
                            window?.scrollTo({top: 0, behavior: "smooth"});
                          } else {
                            dispatch({
                              type: "SCROLL_TO_REFERENCE",
                              payload: {reference: item},
                            });
                          }
                          dispatch({
                            type: "SET_IS_MENU_OPEN",
                            payload: {isMenuOpen: false},
                          });

                          e.preventDefault();
                        }}
                      >
                        <span>{item.label}</span>
                      </a>
                    </div>
                  );
                })}
            </div>

            {!!dataMenuButtons.length && (
              <div className={styles.buttonsHolder}>
                {dataMenuButtons.map((item, index) => {
                  return (
                    <a target="_blank" href={item.url}>
                      <NewCta
                        handleClick={() => null}
                        key={`menu-cta-${item.id}`}
                        label={item.label}
                        className={styles.menuButton}
                        width="184px"
                        secundary={index === 1}
                      />
                    </a>
                  );
                })}
              </div>
            )}
          </Conditional>
        </div>
      </nav>
    </>
  );
});

export default Navigation;
