import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, req }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existGuest = await getGuest(user.email); // fixed typo here
        if (!existGuest) {
          await createGuest({ email: user.email, fullName: user.name });
        }
        return true;
      } catch (error) {
        console.error("Error during signIn:", error); // added error logging
        return false;
      }
    },
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id; // assing a global var: guestId and sotre it in session, so it can be used all over the place
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
