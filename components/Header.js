import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { UilBars, UilMultiply } from "@iconscout/react-unicons";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex flex-col align-items-center justify-content-center">
          <a className="logo" onClick={() => router.push("/")}>
            <Image
              width={50}
              height={70}
              src="/assets/img/logo.png"
              alt=""
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
                Home
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
                About
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
                Services
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                onClick={() => {
                  router.push("/#portfolio");
                  setShowMenu(false);
                }}
              >
                Projects
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
                Team
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
                Contact
              </a>
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
