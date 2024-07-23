import { PostData } from "@/app/_components/Forms/PostData";
import { api } from "@/trpc/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function AddObras() {
  const fn = async (data: FormData) => {
    "use server";
    const form = {
      code: data.get("code") as string,
      title: data.get("title") as string,
      chapter: Number(data.get("chapter")),
      image: data.get("file") as File ,
    };
    const req= await api.pictures.uploadPicture(form);
    if(!req.error){
      redirect("/admin/obras");
    }
  };
  const chapters = await api.chapters.getChapters();

  return (
    <PostData
      fn={fn}
      chapters={chapters}
    />
  );
}
