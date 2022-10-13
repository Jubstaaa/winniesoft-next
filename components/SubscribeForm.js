import { Formik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { useState } from "react";

function SubscribeForm() {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="col-lg-4 col-md-6 footer-newsletter form">
      <h4>Join Our Newsletter</h4>
      <p>Stay in tune with our latest projects.</p>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={async ({ email }) => {
          try {
            setLoading(true);
            const docRef = await addDoc(collection(db, "subscribe-forms"), {
              email,
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
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={values.email}
            />
            <input type="submit" value="Subscribe" />
          </form>
        )}
      </Formik>
      {loading && <div className="loading my-2">Loading</div>}
      {error && (
        <div className="error-message my-2">
          Your message could not be sent. Please try again.
        </div>
      )}
      {submit && (
        <div className="sent-message my-2">
          Your message has been sent. Thank you!
        </div>
      )}
    </div>
  );
}

export default SubscribeForm;
