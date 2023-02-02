import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container d-flex flex-column align-items-center justify-content-center"
          data-aos="fade-up"
        >
          <TypeAnimation
            sequence={[
              t("heroTitle1"),
              2000,
              t("heroTitle2"),
              2000,
              t("heroTitle3"),
              2000,
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "3em" }}
          />
          <h2>{t("heroDesc")}</h2>
          <a href="#about" className="btn-get-started ">
            {t("heroButton")}
          </a>
          <img
            src="assets/img/hero-img.png"
            className="img-fluid hero-img"
            alt="Winniesoft Game Development,Mobile App Development,Web Development"
            data-aos="zoom-in"
            data-aos-delay="150"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
