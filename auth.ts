import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"

export const config = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "select_account",
          access_type: "online",
          response_type: "code",
        }
      }
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    jwt({ token, profile }) {
      if (profile) {
        token.id = profile.sub
      }
      return token
    },
    session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
      }
      return session
    },
  },
} satisfies NextAuthConfig

const nextAuth = NextAuth(config)

export const auth = nextAuth.auth
export const signIn = nextAuth.signIn
export const signOut = nextAuth.signOut
export const handlers = nextAuth.handlers
export const { GET, POST } = nextAuth.handlers