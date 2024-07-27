"use client";
import React from "react";
import { signIn } from "next-auth/react";
export default function AdminLogin() {
  async function Login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const credentials={
      email: data.get("email") as string,
      password: data.get("password") as string
    }

    const req= await signIn("Login", {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
      callbackUrl: "/admin/obras",
    });
  }

  return (
    <div className="flex min-h-[100vh] min-w-full flex-col items-center">
      <h1 className="font-arial text-3xl font-bold">Admin Login</h1>
      <div className="flex h-full items-center">
        <form onSubmit={Login} className="flex flex-col gap-4 rounded-lg bg-white p-5 outline outline-black">
          <label htmlFor="email" className="flex flex-col gap-3 font-arial">
            <span className="text-xl">Email</span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
              className="rounded-lg bg-transparent px-2 py-1 text-black outline outline-black placeholder:text-black"
            />
          </label>
          <label htmlFor="password" className="flex flex-col gap-3 font-arial">
            <span className="text-xl">Password</span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="**********"
              className="rounded-lg bg-transparent px-2 py-1 text-black outline outline-black placeholder:text-black"
            />
          </label>
          <button
            type="submit"
            className="rounded-lg bg-black font-arial text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
