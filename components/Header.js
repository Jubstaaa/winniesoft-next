import { useRouter } from "next/router";
import Image from "next/image";
import { UilBars, UilMultiply } from "@iconscout/react-unicons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { UilAngleDown } from "@iconscout/react-unicons";

function Header() {
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const [dropdownActive, setDropdownActive] = useState(false);

  const languageHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex flex-col align-items-center justify-content-center">
          <a className="logo" onClick={() => router.push("/")}>
            <Image
              width={50}
              height={70}
              src="/assets/img/logo.png"
              alt="Winniesoft Logo"
              className="img-fluid"
            />
          </a>
          <h1 className="logo mx-2">
            <a onClick={() => router.push("/")}>Winniesoft</a>
          </h1>
        </div>

        <nav id="navbar" className={`navbar ${showMenu && "navbar-mobile"}`}>
          <ul>
            <li>
              <a
                className="nav-link scrollto"
                onClick={() => {
                  router.push("/");
                  setShowMenu(false);
                }}
              >
                {t("home")}
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  router.push("/#about");
                  setShowMenu(false);
                }}
                className="nav-link scrollto"
              >
                {t("about")}
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                onClick={() => {
                  router.push("/#services");
                  setShowMenu(false);
                }}
              >
                {t("services")}
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                onClick={() => {
                  router.push("/#project");
                  setShowMenu(false);
                }}
              >
                {t("projects")}
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                onClick={() => {
                  router.push("/#team");
                  setShowMenu(false);
                }}
              >
                {t("team")}
              </a>
            </li>

            <li>
              <a
                className="nav-link scrollto"
                onClick={() => {
                  router.push("/#contact");
                  setShowMenu(false);
                }}
              >
                {t("contact")}
              </a>
            </li>
            <li className="dropdown">
              <a
                onClick={() =>
                  setDropdownActive((currentState) => !currentState)
                }
              >
                <span> {t("language")}</span>
                <UilAngleDown />
              </a>
              <ul className={`${dropdownActive && "dropdown-active"}`}>
                <li>
                  <a onClick={() => languageHandle("en")}>{t("english")}</a>
                </li>
                <li>
                  <a onClick={() => languageHandle("tr")}>{t("turkish")}</a>
                </li>
              </ul>
            </li>
          </ul>
          <i
            onClick={() => {
              !showMenu ? setShowMenu(true) : setShowMenu(false);
            }}
            className={`mobile-nav-toggle ${showMenu && "text-white"}`}
          >
            {showMenu ? <UilMultiply /> : <UilBars />}
          </i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
