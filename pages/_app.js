import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ToTop from "../components/ToTop";

function MyApp({ Component, pageProps }) {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init();

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <>
      <Component {...pageProps} />
      {showButton && <ToTop onClick={scrollToTop} />}
    </>
  );
}

export default MyApp;
