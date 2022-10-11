import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
function Header() {
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

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto" onClick={() => router.push("/")}>
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => router.push("/#about")}
                className="nav-link scrollto"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                onClick={() => router.push("/#services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                onClick={() => router.push("/#portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                onClick={() => router.push("/#team")}
              >
                Team
              </a>
            </li>

            <li>
              <a
                className="nav-link scrollto"
                onClick={() => router.push("/#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
