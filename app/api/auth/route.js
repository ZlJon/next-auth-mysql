import { NextResponse } from "next/server";
import { pool } from "../../../../config/db";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        let user = await pool.query(
          `select * from users where email = "${credentials.email}" `
        );
        user = user[0];

        if (!user) {
          return null;
        }
        if (user.password) {
          return user.password === credentials.password ? user : null;
        }
      },
    }),
  ],
  secret: "hhh",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
