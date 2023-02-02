import {
  UilMapMarker,
  UilEnvelope,
  UilPhoneVolume,
} from "@iconscout/react-unicons";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("contactTitle")}</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i>
                    <UilMapMarker />
                  </i>

                  <h3>{t("contactAddressTitle")}</h3>
                  <p>{t("contactEmpty")}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i>
                    <UilEnvelope />
                  </i>
                  <h3>{t("contactEmail")}</h3>
                  <p>info@winniesoft.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i>
                    <UilPhoneVolume />
                  </i>
                  <h3>{t("contactPhone")}</h3>
                  <p>{t("contactEmpty")}</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
