import {
  UilPlayCircle,
  UilMobileAndroid,
  UilBrowser,
} from "@iconscout/react-unicons";
import { useTranslation } from "react-i18next";

function Services() {
  const { t, i18n } = useTranslation();
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("servicesTitle")}</h2>
          <p>{t("servicesDesc")}</p>
        </div>

        <div className="row align-items-center justify-content-center">
          <div
            className="col-md-6 col-lg-3 col-12 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <div className="icon">
                <UilPlayCircle />
              </div>
              <h4 className="title">
                <a href="#portfolio">{t("servicesBox1Title")}</a>
              </h4>
              <p className="description">{t("servicesBox1Desc")}</p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 col-12 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <UilMobileAndroid />
              </div>
              <h4 className="title">
                <a href="#portfolio">{t("servicesBox2Title")}</a>
              </h4>
              <p className="description">{t("servicesBox2Desc")}</p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 col-12 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <UilBrowser />
              </div>
              <h4 className="title">
                <a href="#portfolio">{t("servicesBox3Title")}</a>
              </h4>
              <p className="description">{t("servicesBox3Desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
