import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { env } from "@/env";
import { db } from "@/server/db";
import { loginDTO } from "./dtos/login.dto";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }
}
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: async ({ session, token }) => {
      
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
    jwt: async ({ user, token }) => {
      return token;
    },
    signIn: async ({ user }) => {
      return true;
    },
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    CredentialsProvider({
      name: "Login",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "password", type: "password" },
      },
      type: "credentials",
      id: "Login",
      async authorize(credentials, req) {
        const result = loginDTO.safeParse(credentials);

        if (!result.success) return null;
        
        const { email, password } = result.data;
        const userExist = await db.user.findUnique({
          where: { email: email },
        });

        if (!userExist) throw new Error("Correo electronico incorrecto");
        const match= await compare(password, userExist.password);
        console.log(match);
        if (!match) throw new Error("La contraseña es incorrecta");
        return {
          id: userExist.id,
          name: userExist.name,
          image: userExist.image,
          email: userExist.email,
        };
      },
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: "/admin/login",
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
