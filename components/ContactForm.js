import { Formik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="col-lg-6 mt-4 mt-md-0">
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        onSubmit={async ({ name, email, subject, message }) => {
          try {
            setLoading(true);
            const docRef = await addDoc(collection(db, "contact-forms"), {
              name,
              email,
              subject,
              message,
            });
            setLoading(false);
            setSubmit(true);
            setTimeout(() => {
              setSubmit(false);
            }, 3000);
          } catch (e) {
            setError(true);
          }
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form className="form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder={t("contactFormName")}
                  required
                  onChange={handleChange}
                  value={values.name}
                />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder={t("contactFormEmail")}
                  required
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder={t("contactFormSubject")}
                required
                onChange={handleChange}
                value={values.subject}
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder={t("contactFormMessage")}
                required
                onChange={handleChange}
                value={values.message}
              ></textarea>
            </div>
            <div className="my-3">
              {loading && (
                <div className="loading">{t("contactFormLoading")}</div>
              )}
              {error && (
                <div className="error-message">{t("contactFormError")}</div>
              )}
              {submit && (
                <div className="sent-message">{t("contactFormSuccess")}</div>
              )}
            </div>
            <div className="text-center">
              <button type="submit">{t("contactFormButton")}</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
