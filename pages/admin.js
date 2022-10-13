import { collection, getDocs } from "firebase/firestore";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { db } from "../firebase-config";

function admin({ contactForms, subscribeForms }) {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container"></div>
      </section>
      <section className="inner-page">
        <div className="container">
          {!session && (
            <div className="d-flex justify-content-center align-items-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => signIn()}
              >
                Sign in
              </button>
            </div>
          )}
          {session && (
            <>
              <div className="d-flex justify-content-end align-items-center">
                <button
                  type="button"
                  className=" btn btn-secondary"
                  onClick={() => signOut()}
                >
                  Sign out
                </button>
              </div>
              <h2>Contact Forms</h2>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {contactForms.map((form, i) => (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>{form.name}</td>
                      <td>{form.email}</td>
                      <td>{form.subject}</td>
                      <td>{form.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h2>Subscribe Forms</h2>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribeForms.map((form, i) => (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>{form.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default admin;

export async function getServerSideProps() {
  const contactForms = [];
  const subscribeForms = [];
  const contact = await getDocs(collection(db, "contact-forms"));
  contact.forEach((doc) => {
    contactForms.push(doc.data());
  });
  const subscribe = await getDocs(collection(db, "subscribe-forms"));
  subscribe.forEach((doc) => {
    subscribeForms.push(doc.data());
  });
  return {
    props: { contactForms, subscribeForms },
  };
}
