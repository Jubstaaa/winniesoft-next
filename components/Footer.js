import { UilAngleRightB } from "@iconscout/react-unicons";
import Copyright from "./Copyright";
import SubscribeForm from "./SubscribeForm";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-contact">
              <h3>Winniesoft</h3>
              <p>
                <strong>{t("contactAddressTitle")}:</strong>
                {t("contactEmpty")}
                <br />
                <strong>{t("contactPhone")}:</strong> {t("contactEmpty")}
                <br />
                <strong>{t("contactEmail")}:</strong> info@winniesoft.com
                <br />
              </p>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>{t("servicesTitle")}</h4>
              <ul>
                <li>
                  <i>
                    {" "}
                    <UilAngleRightB />
                  </i>{" "}
                  <a href="#services">{t("servicesBox1Title")}</a>
                </li>
                <li>
                  <i>
                    {" "}
                    <UilAngleRightB />
                  </i>{" "}
                  <a href="#services">{t("servicesBox2Title")}</a>
                </li>
                <li>
                  <i>
                    {" "}
                    <UilAngleRightB />
                  </i>{" "}
                  <a href="#services">{t("servicesBox3Title")}</a>
                </li>
              </ul>
            </div>

            <SubscribeForm />
          </div>
        </div>
      </div>

      <Copyright />
    </footer>
  );
}

export default Footer;
