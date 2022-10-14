import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Username",

      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          email: "admin",
        };
        if (
          credentials.username == process.env.CREDENTIALS_USERNAME &&
          credentials.password == process.env.CREDENTIALS_PASSWORD
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);

async function getServerSideProps() {
  const admin = [];

  const adminRef = await getDocs(collection(db, "admin"));
  adminRef.forEach((doc) => {
    admin.push(doc.data());
  });
  console.log(admin);
  return {
    props: { admin },
  };
}
