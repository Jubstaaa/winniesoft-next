import { useState } from "react";
import {
  UilCommentsAlt,
  UilBracketsCurly,
  UilLifeRing,
  UilFolderCheck,
} from "@iconscout/react-unicons";
import { useTranslation } from "react-i18next";

function About() {
  const { t, i18n } = useTranslation();
  const [magic, setMagic] = useState(false);
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row no-gutters">
          <div
            className="content col-xl-5 d-flex align-items-stretch justify-content-center"
            data-aos="fade-right"
          >
            <div className="content">
              <h3> {t("aboutTitle")}</h3>
              <p>
                {t("aboutDesc")}
                <br />
              </p>
              <div className="text-center">
                <div
                  className="d-inline-block"
                  onMouseEnter={() => {
                    setMagic(true);
                  }}
                  onMouseLeave={() => {
                    setMagic(false);
                  }}
                >
                  <h2 className="d-inline">{magic && "Abracadabra!"}</h2>

                  <h2
                    className="d-inline"
                    style={{ fontSize: "4rem" }}
                    id="magic"
                  >
                    {!magic && "🎩"} {magic && "🐰"}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-7 d-flex align-items-stretch"
            data-aos="fade-left"
          >
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i>
                    <UilFolderCheck />
                  </i>
                  <h4> {t("aboutBox1Title")}</h4>
                  <p>{t("aboutBox1Desc")}</p>
                </div>
                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i>
                    <UilBracketsCurly />
                  </i>
                  <h4> {t("aboutBox2Title")}</h4>
                  <p>{t("aboutBox2Desc")}</p>
                </div>
                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i>
                    <UilCommentsAlt />
                  </i>
                  <h4> {t("aboutBox3Title")}</h4>
                  <p>{t("aboutBox3Desc")}</p>
                </div>
                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i>
                    <UilLifeRing />
                  </i>
                  <h4> {t("aboutBox4Title")}</h4>
                  <p>{t("aboutBox4Desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
