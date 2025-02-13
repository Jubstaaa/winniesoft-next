import { collection, getDocs, addDoc } from "firebase/firestore";
import { useSession, signIn, signOut } from "next-auth/react";
import { db } from "../firebase";
import Head from "next/head";
function Admin({ contactForms, subscribeForms }) {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Admin | Winniesoft</title>
      </Head>
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
              <div class="table-responsive">
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
              </div>
              <h2>Subscribe Forms</h2>
              <div class="table-responsive">
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
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Admin;

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
