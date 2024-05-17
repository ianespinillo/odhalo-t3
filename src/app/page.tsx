import Link from "next/link";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { ImageMenu } from "./_components/menu/ImageMenu";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="min-h-screenbg-[#c0c0c0] flex flex-col gap-12 text-white ">
      <div className="lg:mx-20">
        <ImageMenu />
      </div>
    </main>
  );
}
