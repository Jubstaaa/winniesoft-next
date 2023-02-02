import { Formik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function SubscribeForm() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="col-lg-4 col-md-6 footer-newsletter form">
      <h4>{t("footerNewsletterTitle")}</h4>
      <p>{t("footerNewsletterDesc")}</p>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={async ({ email }) => {
          try {
            console.log("start");
            setLoading(true);
            const docRef = await addDoc(collection(db, "subscribe-forms"), {
              email,
            });
            console.log("finish");
            setLoading(false);
            setSubmit(true);
            setTimeout(() => {
              setSubmit(false);
            }, 3000);
          } catch (e) {
            console.log("error");
            console.log(e);
            setError(true);
          }
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={values.email}
            />
            <input type="submit" value={t("footerNewsletterButton")} />
          </form>
        )}
      </Formik>
      {loading && <div className="loading my-2">{t("contactFormLoading")}</div>}
      {error && (
        <div className="error-message my-2">{t("contactFormError")}</div>
      )}
      {submit && (
        <div className="sent-message my-2">{t("contactFormSuccess")}</div>
      )}
    </div>
  );
}

export default SubscribeForm;
