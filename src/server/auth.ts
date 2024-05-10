import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import {compare } from 'bcryptjs';
import { env } from "@/env";
import { db } from "@/server/db";
import async from '../app/page';

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
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    CredentialsProvider({
      name: 'Login',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'example@example.com'
        },
        password: { label: 'password', type: 'password' }
      },
      type: 'credentials',
      id: 'Login',
      async authorize(credentials, req) {
        const result = loginDTO.safeParse(credentials)
        if(!result.success) return null;
        
        const { email, password } = result.data
        const userExist= await db.user.findUnique({
          where: { email: email}
        })
        if(!userExist) return null;
        const match= await compare(password, userExist.password);
        if(!match) return null;
        return userExist
      },
    }),
  ],
};


export const getServerAuthSession = () => getServerSession(authOptions);
