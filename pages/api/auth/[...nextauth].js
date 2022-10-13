import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
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
          credentials.username == "admin" &&
          credentials.password == "22cc92f9b"
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
