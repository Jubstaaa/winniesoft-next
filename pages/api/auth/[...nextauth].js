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
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  secret: "bd4bcc17af040f7c3d6ed93615ca8e29",
};
export default NextAuth(authOptions);
