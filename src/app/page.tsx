import Link from "next/link";


import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { Navbar } from "./_components/Navbar/Navbar";

export default async function Home() {
  
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#c0c0c0] text-white">
      <header className="mx-20">
        <Navbar />
      </header>
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
